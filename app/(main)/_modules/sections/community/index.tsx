import {
  ArrowIcon,
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { FC, ReactElement } from "react";

export const CommunitySection: FC = (): ReactElement => {
  return (
    <section className="py-10 lg:py-32 flex flex-col gap-20">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-7xl text-foreground">Join Our Community</h1>
        <p className="max-w-md">
          Connect with like-minded professionals, participate in discussions,
          and access exclusive content. Whether you&apos;re a beginner or an
          experienced developer, our community is here to support your growth.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>FORUM</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              Engange in discussions, ask questions, and share your knowledge.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <ArrowIcon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>WEBINARS</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              Attend live webinars hosted by industry experts on various topics.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <ArrowIcon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>BLOG</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              Stay informed with articles, tutorials, and news on the latest
              trends in software development.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <ArrowIcon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </div>
    </section>
  );
};
