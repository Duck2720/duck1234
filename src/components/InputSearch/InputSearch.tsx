import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./InputSearch.scss";
import { filteredProducts } from "redux/features/products/productsSlice";

function InputSearch() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const filterProducts = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(filteredProducts(input));
    setInput("");
  };
  return (
    <div className="col-md-6 col-8 d-flex align-items-center">
      <form className="input-group">
        <input
          value={input}
          className="form-control rounded search"
          placeholder="Search by name"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="search-button"
          onClick={(e) => filterProducts(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default InputSearch;
