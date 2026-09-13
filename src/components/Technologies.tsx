import { use, useState } from "react";
import type { Itechnologies } from "../types/technologiesType";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface technologiesProps {
  technologiesPromise: Promise<Itechnologies[]>;
}

const Technologies = ({ technologiesPromise }: technologiesProps) => {
  const technologies = use(technologiesPromise);
  const [addToStack, setAddToStack] = useState<Itechnologies[]>([]);
  const [removedTechnologyId, setRemovedTechnologyId] = useState<string | null>(
    null,
  );
  const [resetAll, setResetAll] = useState<boolean>(false);

  return (
    <div className="container mx-auto mb-20 md:mb-0 my-0 md:my-16  ">
      <h2 className="text-center md:text-start font-bold text-[24px] md:text-[36px]">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-center md:text-start text-[14px] md:text-[18px] pt-2">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-7 mt-10 items-center md:items-start">
        {/* Technology Cards */}
        <div className="col-span-1 grid grid-cols-1 justify-items-center gap-7 sm:grid-cols-2 md:col-span-9 md:grid-cols-3 md:justify-items-stretch">
          {technologies.map((technology: Itechnologies) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              setAddToStack={setAddToStack}
              addToStack={addToStack}
              removedTechnologyId={removedTechnologyId}
              resetAll={resetAll}
              setResetAll={setResetAll}
            />
          ))}
        </div>

        {/* Your Stack */}
        <div className="col-span-1 flex justify-center md:col-span-3 md:justify-start">
          <YourStack
            addToStack={addToStack}
            setAddToStack={setAddToStack}
            setRemovedTechnologyId={setRemovedTechnologyId}
            setResetAll={setResetAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
