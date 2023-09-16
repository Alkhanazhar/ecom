import React from "react";
import CategoryCard from "./CategoryCard"
import "../App.css"

const data = [
  { img: "https://loremflickr.com/420/420/skin", type: "Makeup", quantity: "(4 Items)" },
  { img: "https://loremflickr.com/420/420/therapy", type: "Nail & wax", quantity: "(8 Items)" },
  { img: "https://loremflickr.com/420/420/doctor", type: "Skin Care", quantity: "(6 Items)" },
];

const Category = () => {
  return <div className="py-16">
  <div className="container text-center Itext-white">
  <h3 className= "cursive xl:text-[80px] text-gray-500 md:text-[30px]">
  Favorite Category
  </h3>
  <h2 className="text-[30px] font-medium">Top Category</h2>
  <div className="flex justify-center gap-4 md:gap-16 pt-8">
{data.map((item,index)=><CategoryCard key={index} type={item.type} quantity={item.quantity} img={item.img}/> )}
  </div>
  </div>
  </div>
};

export default Category;
