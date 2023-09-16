import React from "react";
import Image from "next/image";
import Model from "../../assets/model-hero.jpg";

const Hero = () => {
  return (
    <div className="container relative pt-16">
    
      <Image
        src={Model}
        alt="model"
        width={1500}
        height={900}
        className="w-[100%] h-auto"
      />

      <div className="hidden text-center sm:block absolute top-[50%] left-[70%] rounded-sm translate-x-[-50%] translate-y-[-50%] bg-white w-[250px] h-[300px] space-y-3 lg:w-[300px] lg:h-[300px] lg:space-y-6 xl:w-[300px] xl:h-[300px]  p-8 xl:space-y-8" 
      ><div className="h-[100%] flex flex-col gap-10 items-center content-center">
        <h2 className="text-[20px] font-semibold lg:text-[30px] xl:[40px] leading-tight">
          New Lipsticks for girls
        </h2>
        <p className="text-[16px]">
        What are the best lipsticks you have ever bought?
        </p>
        <button className="bg-[#333] uppercase text-white-[12px] text-center text-white lg:text-[16px] py-2 xl:py-3 px-6 rounded-md hover:bg-accent">
          Shop Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
