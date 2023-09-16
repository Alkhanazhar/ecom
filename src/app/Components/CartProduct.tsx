import { removeFromCart } from '@/redux/cartSlice'
import { useAppDispatch } from '@/redux/hook'
import React from 'react'

const CartProduct = ({id,img,name,price,quantity}:any) => {
    const dispatch=useAppDispatch()
  return (
    <div className='flex justify-between items-center'>
        <div className="flex items center gap-4">
            <img src={img} alt={name} />
            <div className="space-y-2">
                <h3 className='font-medium'>{name}</h3>
                <p className='text-gray-600 text-[14px]'>{quantity} x ${price}.00 </p>
            </div>
        </div>
        <div className='cursor-pointer' onClick={()=>dispatch(removeFromCart(id))}>✖️</div>
      
    </div>
  )
}

export default CartProduct
