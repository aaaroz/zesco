"use client";
import { cn } from "@/lib/utils";
import { Code2Icon } from "lucide-react";
import Link from "next/link";
import { FC, ReactElement, useEffect, useState } from "react";
import { Button } from "./button";
import { GithubOutlined } from "@ant-design/icons";
import { ModeToggle } from "./mode-toggle";

const links = ["Products", "Learn", "Community", "Company", "About us"];

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
      <nav className="space-x-8">
        {links.map((link, index) => (
          <Link
            href="#"
            key={index}
            className={cn(
              "text-muted-foreground",
              link === "Products" && "text-primary font-semibold"
            )}
          >
            {link}
          </Link>
        ))}
      </nav>
      <div className="flex gap-1 items-center">
        <Button size="icon" variant="ghost" asChild>
          <Link href="https://github.com/aaaroz">
            <GithubOutlined className="text-xl" />
          </Link>
        </Button>
        <Button variant="ghost">Login</Button>
        <Button variant="secondary">Sign Up</Button>
      </div>
    </header>
  );
};
