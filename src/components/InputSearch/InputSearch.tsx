import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "./InputSearch.scss";
import { filteredProducts } from "redux/features/products/productsSlice";

function InputSearch() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const filterProducts = () => {
    dispatch(filteredProducts(inputRef.current?.value));
  };
  return (
    <div className="col-md-6 col-8 d-flex align-items-center">
      <form className="input-group">
        <input
          type="search"
          className="form-control rounded search"
          placeholder="Search by name"
          ref={inputRef}
          onChange={filterProducts}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default InputSearch;
