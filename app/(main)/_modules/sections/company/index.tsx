import { FC, ReactElement, useEffect, useState } from "react";
import { STACKS } from "./constant";
import { InfiniteMovingElement } from "@/components/ui/infinite-moving-element";
import { CompanyCard } from "@/components/ui/company-card";

export const CompanySection: FC = (): ReactElement => {
  const [isMounted, setIsMounted] = useState(false);
  const stacksInArray: Array<[string, React.ReactElement]> = Object.entries(
    STACKS
  ).sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);
  return (
    <section className="w-full flex flex-col gap-5 justify-center items-center mb-20">
      <div className="flex flex-col px-10 md:px-20 lg:px-40">
        <h3 className="text-primary-foreground text-center md:text-lg">
          Powering the world best product teams.
        </h3>
        <h3 className="text-muted-foreground text-center md:text-lg">
          Companies of all sizes and includes now productions.
        </h3>
      </div>
      {isMounted ? (
        <InfiniteMovingElement
          direction="left"
          speed="slow"
          pauseOnHover={false}
          className="w-full"
        >
          {stacksInArray.map(([name, icon], index) => (
            <CompanyCard key={index} name={name} icon={icon} />
          ))}
        </InfiniteMovingElement>
      ) : null}
    </section>
  );
};
