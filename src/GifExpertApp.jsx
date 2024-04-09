import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-pink-400">
          GIF Searcher
        </h1>
      </div>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
