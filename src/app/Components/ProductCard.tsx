import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { addToCart } from "@/redux/cartSlice";
interface Iproduct{
  id: number, name:string,price:number,img:string,sale:boolean;
}

const ProductCard = ({ id, img, name, price, sale }:Iproduct) => {
  const dispatch = useAppDispatch();

  const addProductoCart = (e:React.FormEvent) => {
    e.stopPropagation();
    const payload = {
      id,
      name,
      img,
      price,
      quantity: 1,
    };
    dispatch(addToCart(payload));
  };
  const router = useRouter();
  return (
    <div
      className="group cursor-pointer "
      onClick={() => router.push(`/details/${id}`)}
    >
      <div className="relative">
        <Image
          src={img}
          alt={name}
          width={1000}
          height={1000}
          className="w-[300px] text-center m-auto h-[300px] object-cover"
        />

        {sale && <div className="rounded-md px-2 py-[2px]">SALE!</div>}

        <div className="absolute top-0 left-0 w-full h-full  opacity-0 bg-[#00000087] transition-opacity duration-500 group-hover:opacity-100 cursor-pointer">
          <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
            <div className=" bg-white text-[26px] flex items-center justify-center place-items-center p-2 w-10 h-10">
              {/* <AiOutlineHeart /> */}
              ❤️
            </div>
            <div
              className="bg-white text-[26px] flex items-center justify-center  place-items-center p-2 w-10 h-10 z-[999]"
              onClick={addProductoCart}
            >
              {/* <AiOutlineShopping Cart /> */}
              🛒
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-medium pb-3 hover:text-accent">{name}</h2>
      <p className="text-gray-500 font-light">${price}.00 </p>{" "}
      {/* <div onClick={addProductoCart}>🛒</div> */}
    </div>
  );
};

export default ProductCard;
