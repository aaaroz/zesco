import { FC, ReactElement } from "react";
import {
  FeatureCard,
  FeatureDescription,
  FeatureTitle,
  SkeletonFour,
  SkeletonOne,
  SkeletonThree,
  SkeletonTwo,
} from "./bento-grid";

const features = [
  {
    title: "Track issues effectively",
    description:
      "Track and manage your project issues with ease using our intuitive interface.",
    skeleton: <SkeletonOne />,
    className:
      "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800 max-h-[90dvh]",
  },
  {
    title: "Capture pictures with AI",
    description:
      "Capture stunning photos effortlessly using our advanced AI technology.",
    skeleton: <SkeletonTwo />,
    className:
      "border-b col-span-1 lg:col-span-2 dark:border-neutral-800 max-h-[90dvh]",
  },
  {
    title: "Watch our AI on YouTube",
    description:
      "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
    skeleton: <SkeletonThree />,
    className:
      "max-h-[50dvh] col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
  },
  {
    title: "Deploy in seconds",
    description:
      "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
    skeleton: <SkeletonFour />,
    className: "max-h-[50dvh] col-span-1 lg:col-span-3 border-b lg:border-none",
  },
];
export const FeaturesSection: FC = (): ReactElement => {
  return (
    <section className="relative z-20 py-10 lg:py-32 max-w-7xl mx-auto">
      <div className="px-8 space-y-5 md:space-y-10">
        <h4 className="text-2xl md:text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of{" "}
          <span className="bg-primary py-0.5 md:py-1.5 px-2 rounded-lg">
            features
          </span>
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
};
