import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto my-40 md:py-0 ">
        <Spotlight
        className="top-90 right-0 md:right-60 md:top-20"
        fill="blue"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1   className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Art of the Music</h1>
        <p className="mt-16 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether your a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        
        <div className="mt-12">
        <Link href={"/courses"}>   
        <Button
                    borderRadius="2rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button>

                    
        </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
