"use client";
import { cn } from "@/lib/utils";
import { Code2Icon } from "lucide-react";
import Link from "next/link";
import { FC, ReactElement, useEffect, useState } from "react";
import { Button } from "./button";
import { GithubOutlined, MenuOutlined } from "@ant-design/icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { UserButton } from "./user-button";

const links = ["Home", "Learn", "Community", "Company", "About us"];

export const Navbar: FC = (): ReactElement => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "sticky top-5 z-50 border-0 border-border w-full px-5 py-1.5 flex justify-between items-center rounded-lg bg-transparent backdrop-blur-lg transition-all duration-200",
        isScrolled && "border bg-neutral-900/40"
      )}
    >
      <Link href="/">
        <h1 className="text-xl font-mono flex gap-2 items-center">
          <Code2Icon className="size-7 shrink-0" />
          Zesco
        </h1>
      </Link>
      <nav className="hidden md:block md:space-x-3 lg:space-x-8">
        {links.map((link, index) => (
          <Link
            href="#"
            key={index}
            className={cn(
              "text-muted-foreground hover:text-primary transition-colors duration-200",
              link === "Home" && "text-primary font-semibold"
            )}
          >
            {link}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex gap-1 items-center">
        <Button size="icon" variant="ghost" asChild>
          <Link href="https://github.com/aaaroz" target="_blank">
            <GithubOutlined className="text-xl" />
          </Link>
        </Button>
        <UserButton />
      </div>
      <nav className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <Button size="icon" variant="ghost" asChild>
              <MenuOutlined />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="mb-10">
                <Link href="/" className="flex justify-center items-center">
                  <h1 className="text-xl font-mono flex gap-2 items-center">
                    <Code2Icon className="size-7 shrink-0" />
                    Zesco
                  </h1>
                </Link>
              </SheetTitle>
              <SheetDescription>
                <div className="flex items-center gap-2 justify-center">
                  <Button size="icon" variant="ghost" asChild>
                    <Link href="https://github.com/aaaroz">
                      <GithubOutlined className="text-xl" />
                    </Link>
                  </Button>
                  <UserButton />
                </div>
                <nav className="flex flex-col gap-3 mt-10">
                  {links.map((link, index) => (
                    <Button
                      key={index}
                      asChild
                      variant={link === "Products" ? "default" : "secondary"}
                    >
                      <Link
                        href="#"
                        className={cn(
                          "text-muted-foreground",
                          link === "Products" && "text-primary font-semibold"
                        )}
                      >
                        {link}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
