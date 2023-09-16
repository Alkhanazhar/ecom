import React from "react";
import BlogCard from "./BlogCard";
const data = [
  {
    title: "Favorite Lipstick Shades",
    comment: "I love the bold red lipstick!",
    date: "2023-09-16",
    img: "https://loremflickr.com/420/420/HERBAL",
  },
  {
    title: "Skincare Routine Tips",
    comment: "What's your go-to moisturizer for dry skin?",
    date: "2023-09-15",
    img: "https://loremflickr.com/420/420/user",
  },
  {
    title: "Makeup Trends for Fall",
    comment: "I'm excited for smoky eye looks this fall!",
    date: "2023-09-14",
    img: "https://loremflickr.com/420/420/doctor",
  },
  {
    title: "Haircare Essentials",
    comment: "Do you have any recommendations for frizz control products?",
    date: "2023-09-13",
    img: "https://loremflickr.com/420/420/world",
  },
];


const BlogSection = () => {
  return (
    <div className="container pt-32 m-auto text-center w-[90%]">
      <h2 className="font-bold text-4xl">Latest News</h2>
      <p className="text-gray-500 py-2">
        Present posts in a best way to highlight interesting moments of your
        blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8">
        {data.map((item) => {
          return (
            <BlogCard
              key={item.date}
              img={item.img}
              title={item.title}
              data={item.date}
              comment={item.comment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
