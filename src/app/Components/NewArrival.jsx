"use client";
import React, { useState, useEffect } from "react";
import "../App.css";
import Data from "../utils/ProductData";
import ProductCard from "../Components/ProductCard.tsx";

const tab = ["All", "Skin Care", "Lipstick", "MakeUp", "Nail & Wax"];
const NewArrival = () => {
  const handletab = (index) => {
    const category = tab[index].toLowerCase();
    setselect(index);
    // console.log(data.filter((item) => item.category.includes(category)));
    const filteredArray = Data.filter((item) =>
      item.category.includes(category)
    );
    console.log(category);
    if (category == "all") {
      setdata(shuffle(Data.slice(0, 15)));
      return;
    }
    setdata(filteredArray);
    console.log(filteredArray);
  };
  const [select, setselect] = useState(0);
  const [data, setdata] = useState([]);
  const shuffle = (array) => {
    return array
      .map((value) => value)
      .sort(() => (Math.random() > 0.5 ? 1 : -1));
  };
  useEffect(() => {
    setdata(shuffle(Data.slice(0, 15)));
  }, []);
  return (
    <div className="pt-16">
      <div className="text-center">
        <h3 className="cursive text-[80px] text-gray-500">for your beauty</h3>
        <h2 className="text-4xl pt-4 pb-4">NEW ARRIVAL</h2>
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl">
          {tab.map((item, index) => {
            return (
              <li key={index}
                className={`${
                  select === index && "text-accent"
                } cursor-pointer hover:text-accent`}
                onClick={() => {
                  handletab(index);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <div className="pt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] m-auto">
          {data.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                sale={item.sale}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
