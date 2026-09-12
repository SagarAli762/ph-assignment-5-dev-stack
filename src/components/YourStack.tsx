import type { Itechnologies } from "../types/technologiesType";
import YourStackCard from "./YourStackCard";

interface YourStackProps {
  addToStack: Itechnologies[];
}

const YourStack = ({ addToStack }: YourStackProps) => {
  return (
    <div className="w-full max-w-[316px] rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      {/* Header */}
      <div className="px-1">
        <h2 className="text-[20px] font-bold text-slate-800">Your Stack</h2>

        <p className="mt-1 text-[14px] text-slate-400">
          {addToStack.length} Technology Selected
        </p>
      </div>

      {/* Selected Technologies */}
      <div className="mt-3 space-y-2">
        {addToStack.map((stacked) => (
          <YourStackCard key={stacked.id} stacked={stacked} />
        ))}
      </div>

      {/* Remove All */}
      <button
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
