import { Avatar, AvatarImage } from "./avatar";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { SignIn } from "./signin";
import { SignOut } from "./signout";
import { useSession } from "next-auth/react";
import { FC, ReactElement } from "react";

export const UserButton: FC = (): ReactElement => {
  const session = useSession();
  if (!session?.data) return <SignIn />;
  return (
    <div className="flex gap-2 items-center">
      <span className="hidden text-sm sm:inline-flex">
        {session.data.user?.name}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative w-8 h-8 rounded-full">
            <Avatar className="w-8 h-8">
              <AvatarImage
                src={
                  session.data.user?.image ??
                  "https://avatars.githubusercontent.com/zzz"
                }
                alt={session.data.user?.name ?? ""}
              />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.data.user?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.data.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
