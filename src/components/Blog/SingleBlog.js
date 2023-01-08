import React from "react";

const SingleBlog = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <div className="border border-yellow-200 rounded-md p-5 ">
      <h2 className="mb-3 text-lg text-yellow-600 font-semibold">{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default SingleBlog;
