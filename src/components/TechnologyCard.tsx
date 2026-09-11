import type { Itechnologies } from "../types/technologiesType";
import { FaStar } from "react-icons/fa";
const TechnologyCard = ({ technology }: { technology: Itechnologies }) => {
  console.log(technology);
  return (
    <div className="card w-full max-w-[316px] border border-slate-200 bg-base-100 shadow-sm">
      <div className="card-body p-6">
        {/* Icon + Badge */}
        {/* Icon + Badge */}
        <div className="flex items-start justify-between">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-8 w-8 object-contain"
          />

          <span className="badge badge-soft badge-info px-3 py-3">
            {technology.badge}
          </span>
        </div>

        {/* Title + Description */}
        <div className="mt-5">
          <h2 className="text-[21px] font-bold leading-7 text-slate-900">
            {technology.name}
          </h2>

          <p className="mt-2 text-sm leading-[21px] text-slate-500">
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
        <button className="btn mt-2 min-h-10 h-10 w-full border-0 bg-[#080D1B] text-sm font-medium text-white hover:bg-slate-800">
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
