import { useAppSelector } from "@/redux/hook";
import CartProduct from "./CartProduct";
// import {cartProduct} from "";
const Cart = ( {setshowcart} : any) => {
  const products = useAppSelector((state) => state.cartreducer);

  const gettotal = () => {
    let total = 0;
    products.forEach((product) => (total += product.price * product.quantity));
    return total;
  };
  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll ">
      <div className="max-w-[400px] w-full min-h-full bg-white right-0 top-0 p-6 ">
        <div
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={()=>setshowcart(false)}
        >
          ✖️
        </div>
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          your Cart
        </h3>

        <div className="mt-6 space-y-2">
          {products.map((item: any) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center font-medium text-xl py-4">
        <p>Total:</p>
        <p>${gettotal()}.00</p>
      </div>
      <button className="bg-black text-white text-center hover:bg-accent mb-4 mt-4">view cart</button> <button className="bg-black text-white text-center hover:bg-accent mb-4 mt-4">checkout</button>

    </div>
  );
};
export default Cart;
