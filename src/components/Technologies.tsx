import { use } from "react";
import type { Itechnologies } from "../types/technologiesType";

import TechnologyCard from "./TechnologyCard";

interface technologiesProps {
  technologiesPromise: Promise<Itechnologies[]>;
}
const Technologies = ({ technologiesPromise }: technologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <div className="container mx-auto my-20">
      <h2 className="font-bold md:text-[36px]">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-[14px] md:text-[18px]">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {technologies.map((technology: Itechnologies) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          ></TechnologyCard>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
