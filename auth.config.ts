import type { NextAuthConfig } from "next-auth";
import { User } from "./types/definition";

export const authConfig = {
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (account?.provider === "login") {
        const userData = user as User;
        token.user = {
          id: userData.id,
          name: userData.name,
          email: userData.email,
        };
      }

      return token;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token }) {
      session.user = token.user as User;
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
