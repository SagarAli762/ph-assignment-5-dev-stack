import heroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="mt-10 flex md:flex-row flex-col gap-0 md:gap-96 justify-center items-center container mx-auto">
      <div className="flex-1 space-y-10 ">
        <h1 className="font-bold leading-10 md:leading-16 text-[30px] md:text-[60px]  text-center md:text-start">
          Build Your Ideal <br></br>
          <span className="bg-gradient-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="px-2 md:px-0 md:pr-11 text-center text-[14px] md:text-[18px] lg:mx-0 lg:text-start">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-5 justify-center">
          <button className="w-[168px] h-[40px] flex items-center justify-center rounded-[8px] font-semibold text-[12px] md:text-[14px] text-[#FFFFFF] bg-gradient-to-r from-[#F97316] to-[#EC4899]">
            Explore Technologies
          </button>
          <button className="border-[#E5E7EB] border-1 w-[170px] h-[42px] rounded-[8px] font-semibold text-[12px] md:text-[14px] ">
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
