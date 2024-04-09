import { useState } from "react";
import PropTypes from 'prop-types';

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
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Buscar gifs"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.string.isRequired,
};