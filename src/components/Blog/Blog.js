import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleBlog from "./SingleBlog";

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <div className="container mx-5  md:w-2/4 md:mx-auto my-10 grid gap-10">
      {blogs.map((blog) => (
        <SingleBlog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blog;
