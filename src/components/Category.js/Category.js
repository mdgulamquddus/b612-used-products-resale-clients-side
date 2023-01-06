import React from "react";
import CardSingle from "../Card/CardSingle";

const Category = () => {
  const categories = [
    {
      name: "LED",
    },
    {
      name: "4K UHD",
    },
    {
      name: "SMART TV",
    },
    {
      name: "BLACK & WHITE",
    },
  ];
  return (
    <div className="container mx-auto my-20">
      <h2 className="text-4xl font-bold text-center mb-6">All Category</h2>
      <div className="grid lg:grid lg:grid-cols-3 gap-4 md:grid md:grid-cols-2">
        {categories.map((category, idx) => (
          <CardSingle key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
