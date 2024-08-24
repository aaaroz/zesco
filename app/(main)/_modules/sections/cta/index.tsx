import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { FC, ReactElement } from "react";

export const CtaSection: FC = (): ReactElement => {
  return (
    <section className="flex flex-col gap-10 pb-32">
      <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-5xl text-primary-foreground">
        Experience the future of{" "}
        <span className="text-primary">software development</span> with{" "}
        <span className="text-muted-foreground">Development Tools Hub.</span>
      </h1>
      <div>
        <Button size="lg" asChild>
          <Link href="/auth/signup">
            Sign up for free <ArrowUpRightIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
};
