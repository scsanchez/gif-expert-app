import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > 0) {
      onNewCategory(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-pink-500"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Find GIFs"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.string.isRequired,
};
