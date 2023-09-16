import React from 'react'
import Image from 'next/image'


const CategoryCard = ({img,type,quantity}) => {
  return (
    <div>
    <img src={img} width={100} height={100} className='rounded-full'/>
      <h3 className='text-2xl'>{type}</h3>
      <h4 className='text-md'>{quantity}</h4>

    </div>
  )
}

export default CategoryCard
