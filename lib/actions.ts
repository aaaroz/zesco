"use server";
import { TLoginSchema } from "@/app/auth/login/_modules";
import { TRegisterSchema } from "@/app/auth/signup/_modules";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { User } from "@/types/definition";

export async function authenticate(value: TLoginSchema) {
  try {
    await signIn("credentials", value);
    redirect("/");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          throw new Error("Invalid credentials.");
        default:
          throw new Error("Something went wrong.");
      }
    }
    throw error;
  }
}

export async function register(value: TRegisterSchema) {
  try {
    const hashedPassword = await bcrypt.hash(value.password, 10);
    const existingUser = await getUser(value.email);
    if (existingUser) {
      throw new Error("User with that email already exists");
    }
    await sql`INSERT INTO users (name, email, password)
      VALUES (${value.name}, ${value.email}, ${hashedPassword})`;
    redirect("/auth/login");
  } catch (error) {
    console.error("Error create users:", error);
    throw error;
  }
}

export async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
