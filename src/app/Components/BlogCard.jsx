import React from 'react'

const BlogCard = ({img,title,date,comment}) => {
  return (
    <div className='space-y-4 '>
    <img src={img} alt="" className='hover:scale-105'/>
    <div className='text-gray-600 font-medium'>
        <span>{date}</span>
        <span>{comment} comment</span>
        <h3 className='font-bold text-xl'>{title}</h3>
    </div>
      
    </div>
  )
}

export default BlogCard
