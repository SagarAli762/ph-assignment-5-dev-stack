import type { Itechnologies } from "../types/technologiesType";
import YourStackCard from "./YourStackCard";
interface YourStackProps {
  addToStack: Itechnologies[];
}
const YourStack = ({ addToStack }: YourStackProps) => {
  return (
    <div>
      {/* Header */}
      <div>
        <h2 className="text-base font-semibold text-slate-900">Your Stack</h2>

        <p className="mt-1 text-[11px] text-slate-400">2 Technology Selected</p>
      </div>
      {addToStack.map((stacked: Itechnologies) => (
        <YourStackCard key={stacked.id} stacked={stacked}></YourStackCard>
      ))}
    </div>
  );
};

export default YourStack;
