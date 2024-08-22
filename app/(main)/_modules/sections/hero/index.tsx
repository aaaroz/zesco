"use client";
import { LampContainer } from "@/components/ui/lamp";
import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const HeroSection: FC = (): ReactElement => {
  return (
    <div className="mt-32">
      <LampContainer
        header={
          <div className="inline-flex flex-col items-center gap-8 z-10 px-40">
            <h1 className="text-4xl bg-gradient-to-br from-slate-100 via-slate-200 to-slate-500 bg-clip-text text-center font-medium tracking-tight text-transparent md:text-6xl">
              Discover Your One-Stop Destination for Cutting-Edge Development
              Tools
            </h1>
            <p className="text-muted-foreground text-lg text-center px-20">
              Explore the latest tools, tutorials, and resources to enhance your
              development skills and streamline your workflow. Whether
              you&apos;re a beginner or an experienced developer, you&apos;ll
              find something valuable here.
            </p>
            <div className="flex gap-1">
              <Button className="w-fit">Get Started</Button>
              <Button variant="link" className="text-white">
                Discover more
              </Button>
            </div>
          </div>
        }
      >
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          <span className="font-mono">Zesco</span>
        </motion.h1>
      </LampContainer>
    </div>
  );
};
