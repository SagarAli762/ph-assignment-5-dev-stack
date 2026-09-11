import heroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="flex gap-28 justify-center items-center container mx-auto">
      <div className="flex-1 space-y-10">
        <h1 className="font-bold leading-16 text-[30px] md:text-[60px]  text-center md:text-start">
          Build Your Ideal <br></br>
          <span className="bg-gradient-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="md:text-[18px] text-[14px] pr-16">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-5">
          <button className="py-[12px] px-[16px] rounded-[8px] font-semibold text-[14px] text-[#FFFFFF] bg-gradient-to-r from-[#F97316] to-[#EC4899]">
            Explore Technologies
          </button>
          <button className="border-[#E5E7EB] border-1 py-[12px] px-[48px] rounded-[8px] font-semibold text-[14px] ">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
