import { toast } from "react-toastify";
import type { Itechnologies } from "../types/technologiesType";
import YourStackCard from "./YourStackCard";

interface YourStackProps {
  addToStack: Itechnologies[];
  setAddToStack: React.Dispatch<React.SetStateAction<Itechnologies[]>>;
  setRemovedTechnologyId: React.Dispatch<React.SetStateAction<string | null>>;
  setResetAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const YourStack = ({
  addToStack,
  setAddToStack,
  setRemovedTechnologyId,
  setResetAll,
}: YourStackProps) => {
  const handleRemovedIdFromStack = (stakedId: string): void => {
    const restAddToStack = addToStack.filter((item) => item.id !== stakedId);
    setAddToStack(restAddToStack);
    setRemovedTechnologyId(stakedId);
    const removedItem = addToStack.find((item) => item.id === stakedId);
    if (removedItem) {
      toast.error(`${removedItem.name} removed successfully`);
    }
  };
  const handleRemoveAll = (): void => {
    setAddToStack([]);
    setResetAll(true);
    toast.error("All technology removed successfully");
  };

  return (
    <div className="mx-auto w-full  rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:mx-0">
      {" "}
      {/* Header */}
      <div className="px-1">
        <h2 className="text-[20px] font-bold text-slate-800">Your Stack</h2>

        <p className="mt-1 text-[14px] text-slate-400">
          {addToStack.length} Technology Selected
        </p>
      </div>
      {/* Selected Technologies */}
      <div className="mt-3 space-y-2">
        {addToStack.length === 0 ? (
          <div className="flex h-[100px] items-center justify-center rounded-md border border-dashed border-slate-200">
            <p className="text-[11px] text-slate-400">Your stack is empty</p>
          </div>
        ) : (
          addToStack.map((stacked) => (
            <YourStackCard
              addToStack={addToStack}
              setAddToStack={setAddToStack}
              key={stacked.id}
              stacked={stacked}
              handleRemovedIdFromStack={handleRemovedIdFromStack}
            ></YourStackCard>
          ))
        )}
      </div>
      {/* Remove All */}
      <button
        onClick={handleRemoveAll}
        className="mt-8 h-[24px] w-full rounded-md border border-red-200
        bg-white text-[10px] font-medium text-red-500
        hover:bg-red-50"
      >
        Remove All
      </button>
    </div>
  );
};

export default YourStack;
