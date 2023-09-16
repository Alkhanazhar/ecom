"use client";
import React, { useEffect, useState } from "react";
// import {useParams} from "next/navigation"
import Data from "../../utils/ProductData";
import { useParams } from "next/navigation";
import Link from "next/link";

interface IProduct {
  id: number;
  img: any;
  name: string;
  price: number;
  category: string[];
  sale: boolean | undefined;
}

const DetailPage = () => {
  const [productData, setProductData] = useState<any>();
  const params = useParams();
  useEffect(() => {
    const id = params.id;
    const getdata = Data.filter((item) => item.id.toString() === id)[0];
    setProductData(getdata);
  }, []);

  return (
    <div className="pt-8 ">
      <div className="bg-gray-100 py-4">
        <div className="container flex gap-4 items-center text-gray-500">
          <Link href="/" className="cursor-pointer hover: text-accent">
            Home
          </Link>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p className="capitalize">{productData?.category[0]}</p>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p> {productData?.name}</p>
        </div>
      </div>
      <div className="max-xl:flex-row gap-8 md:flex-col md:px-6">
        <div className="container pt-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <img
                className="w-full h-full"
                src={productData?.img}
                width={"1000px"}
                height={"1200px"}
                alt={productData?.name}
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center text-accent"></div>
          <div className="text-[#161616] space-y-6">
            <h2 className="text-3xl font-semibold">{productData?.name}</h2>
            <p className="text-x1">${productData?.price}.00</p>
          </div>
          <p className="text-gray-500 text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit vel
            imperdiet turpis. Orci varius natoque penatibus et magnis dis
            parturient montes. Pellentesque pretium lacinia orci nec dictum.
          </p>
          <p className="text-gray-480 text-[14px] hover: text-accent cursor-pointer">
            (8 customer review)
          </p>
          <p className="text-[14px] bg-red-400 inline-block text-white p-1 rounded-md">
            {" "}
            28 in stock
          </p>
          <button className="uppercase bg-accent py-2 px-4 rounded-lg text-white flex gap-2 items-center hover:bg-black">
            <div className="">🛒</div>add to cart
          </button>
          <div className="py-4">
            <div className="w-[30px] h-[2px] bg-gray-480" />
            <div>Name: {productData?.name}</div>
            <div className="capitalize">
              Category: {productData?.category[0]}
            </div>
            <div className="flex gap-1 items-center capitalize">
              Tags:
              {/* {productData?.category.map((item: any) => (<div key=(item)>{item} </div>)} */}
              {productData?.category.map((item: any) => {
                return <div key={item}>{item}</div>;
              })}
            </div>
            <div className="w-[30px] h-[2px] bg-gray-480" />
            <div className="flex gap-1 items-center pt-4">
              SHARE:{""}
              <div className="flex gap-2 items-center text-[18px]">
                <div>fb</div>
                <div>twitter</div>
                <div>linkedin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
