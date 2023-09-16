import React from "react";
import Image from 'next/image'


const FeatureCard = ({ img, title, desc }) => {
  return (
    <div className="flex gap-8">
      <Image
        className="h-[50px] w-auto"
        src={img}
        width={60}
        height={50}
        alt={title}
      />
      <div className="space-y">

      <h2 className="font-medium text-xl uppercase">{title} </h2>
      <p className="text-gray-600 text-[14px]">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
