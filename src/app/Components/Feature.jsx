import React from "react";
import Image from 'next/image'
import cosmetics from "../../assets/cosmetics.png";
import money from "../../assets/money.png";

import FeatureCard from "./FeatureCsard";

const Feature = () => {
  const data = [
    {
      img: cosmetics,
      title: "Naturally Derived",
      desc: "Natural and organic beauty product",
    },
    {
      img: money,
      title: "Free Shipping",
      desc: "Free shipping on all orders over $99",
    },
    {
      img: money,
      title: "Secure Payment",
      desc: "Fully protected when paying online",
    },
  ];
  return (
    <div className="container pt-16 ">
      <div className="grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4">
        {data.map((item) => {
         return( <FeatureCard
            key={item.title}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />)
        })}
      </div>
    </div>
  );
};

export default Feature;
