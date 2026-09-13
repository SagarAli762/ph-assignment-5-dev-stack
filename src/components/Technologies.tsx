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
    <div className="container mx-auto my-20">
      <h2 className="font-bold md:text-[36px]">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-[14px] md:text-[18px] pt-2">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-9 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
          {technologies.map((technology: Itechnologies) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              setAddToStack={setAddToStack}
              addToStack={addToStack}
              removedTechnologyId={removedTechnologyId}
              resetAll={resetAll}
              setResetAll={setResetAll}
            ></TechnologyCard>
          ))}
        </div>
        <div className="col-span-3">
          {/* {addToStack.map((stacked: Itechnologies) => (
            <YourStack key={stacked.id} stacked={stacked}></YourStack>
          ))} */}
          <YourStack
            addToStack={addToStack}
            setAddToStack={setAddToStack}
            setRemovedTechnologyId={setRemovedTechnologyId}
            setResetAll={setResetAll}
          ></YourStack>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
