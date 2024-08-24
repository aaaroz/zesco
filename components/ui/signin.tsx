import React from "react";
import { Button } from "./button";
import Link from "next/link";

export const SignIn: React.FC = (): React.ReactElement => {
  return (
    <>
      <Button variant="ghost" asChild>
        <Link href="/auth/login">Login</Link>
      </Button>
      <Button variant="secondary" asChild>
        <Link href="/auth/signup">Sign Up</Link>
      </Button>
    </>
  );
};
