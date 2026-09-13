import type React from "react";
import type { Itechnologies } from "../types/technologiesType";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface TechnologyCardProps {
  technology: Itechnologies;
  addToStack: Itechnologies[];
  setAddToStack: React.Dispatch<React.SetStateAction<Itechnologies[]>>;
  removedTechnologyId: string | null;
  resetAll: boolean;
  setResetAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const TechnologyCard = ({
  technology,
  setAddToStack,
  addToStack,
  removedTechnologyId,
  resetAll,
  setResetAll,
}: TechnologyCardProps) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  // single item remove from stack
  useEffect(() => {
    if (removedTechnologyId === technology.id) {
      setIsAdded(false);
    }
  }, [removedTechnologyId, technology.id]);
  // all item remove from stack
  useEffect(() => {
    if (resetAll) {
      setIsAdded(false);
      setResetAll(false);
    }
  }, [resetAll, setResetAll]);
  const handleAddedToStack = (): void => {
    setAddToStack([...addToStack, technology]);
    setIsAdded(true);
    toast.success(`${technology.name} added successfully`);
  };
  return (
    <div className="card  border border-slate-200 bg-base-100 shadow-sm">
      <div className="card-body p-6">
        {/* Icon + Badge */}
        {/* Icon + Badge */}
        <div className="flex items-start justify-between">
          <div className="flex flex-row md:flex-col gap-4 justify-center items-center">
            <div className=" rounded-md bg-slate-100 px-2 py-1 text-slate-600">
              <img
                src={technology.icon}
                alt={`${technology.name} icon`}
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <h2 className="text-[21px] font-bold leading-7 text-slate-900">
                {technology.name}
              </h2>
            </div>
          </div>

          <span className="badge badge-soft badge-info px-3 py-3">
            {technology.badge}
          </span>
        </div>

        {/* Title + Description */}
        <div className="mt-5">
          <p className="mt-2 text-sm leading-[21px] text-slate-500 text-start">
            {technology.description}
          </p>
        </div>

        {/* Divider */}
        <div className="divider my-1"></div>

        {/* Meta */}
        <div className="flex items-center justify-between gap-2 text-sm">
          <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-600">
            {technology.category}
          </span>

          <span className="text-slate-500">{technology.difficulty}</span>

          <span className="flex items-center gap-1 text-slate-700">
            <FaStar className="text-xs text-amber-400" />
            {technology.rating}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={handleAddedToStack}
          className={`btn mt-2 h-10 min-h-10 w-full border-0 text-sm font-medium text-white ${
            isAdded
              ? "cursor-not-allowed bg-slate-400"
              : "bg-[#080D1B] hover:bg-slate-800"
          }`}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
