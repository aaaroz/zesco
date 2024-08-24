import React from "react";
import { Button } from "./button";
import { signOut } from "next-auth/react";

export const SignOut: React.FC<React.ComponentPropsWithRef<typeof Button>> = (
  props
): React.ReactElement => {
  return (
    <Button
      variant="ghost"
      className="w-full p-0"
      {...props}
      onClick={() => signOut({ redirect: true })}
    >
      Sign Out
    </Button>
  );
};
