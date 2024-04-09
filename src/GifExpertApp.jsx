import { useState } from "react";
import { AddCategory } from "./assets/components/AddCategory";
import { GifGrid } from "./assets/components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Ballet"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Searcher</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
