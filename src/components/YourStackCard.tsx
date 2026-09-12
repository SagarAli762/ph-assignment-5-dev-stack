import { FiX } from "react-icons/fi";
import type { Itechnologies } from "../types/technologiesType";

interface YourStackCardProps {
  stacked: Itechnologies;
  addToStack: Itechnologies[];
  setAddToStack: React.Dispatch<React.SetStateAction<Itechnologies[]>>;
  handleRemovedIdFromStack: (id: string) => void;
}

const YourStackCard = ({
  stacked,
  handleRemovedIdFromStack,
}: YourStackCardProps) => {
  return (
    <div
      className="flex h-[36px] w-full items-center justify-between
      rounded-md border border-slate-200 bg-white px-3"
    >
      {/* Left side */}
      <div className="flex items-center gap-2">
        <img
          className="h-5 w-5 object-contain"
          src={stacked.icon}
          alt={stacked.name}
        />

        <div className="leading-none">
          <h3 className="text-[14px] font-medium text-slate-800">
            {stacked.name}
          </h3>

          <p className="mt-[3px] text-[12px] text-slate-400">
            {stacked.category}
          </p>
        </div>
      </div>

      {/* Remove button */}
      <button
        onClick={() => handleRemovedIdFromStack(stacked.id)}
        className="flex h-5 w-5 items-center justify-center
        rounded-full text-slate-400
        hover:bg-slate-100 hover:text-slate-700"
      >
        <FiX className="text-sm" />
      </button>
    </div>
  );
};

export default YourStackCard;
