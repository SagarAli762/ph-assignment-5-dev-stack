import { FiX } from "react-icons/fi";
import type { Itechnologies } from "../types/technologiesType";
interface YourStackCardProps {
  stacked: Itechnologies;
}
const YourStackCard = ({ stacked }: YourStackCardProps) => {
  return (
    <div>
      <div className="card w-full max-w-[320px] border border-slate-200 bg-base-100 shadow-sm">
        <div className="card-body p-4">
          {/* Selected Technologies */}
          <div className="flex justify-between items-center mt-2 space-y-2">
            {/* Left */}
            <div className="flex items-center gap-3">
              <img
                className="h-7 w-7 object-contain"
                src={stacked.icon}
                alt={stacked.name}
              />
              <div>
                <h3 className="text-xs font-medium text-slate-800"></h3>
                {stacked.name}
                <p className="text-[8px] text-slate-400">{stacked.category}</p>
              </div>
            </div>

            {/* Remove */}
            <button className="btn btn-ghost btn-xs p-0 text-slate-400 hover:bg-transparent hover:text-slate-700">
              <FiX className="text-base" />
            </button>
          </div>
        </div>

        {/* Remove All */}
      </div>
    </div>
  );
};

export default YourStackCard;
