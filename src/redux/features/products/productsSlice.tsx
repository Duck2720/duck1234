import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: {
      allProducts: [],
      isFetching: false,
      error: false
    }
  },
  reducers: {
    filteredProducts: (state, action) => {
      state.products.allProducts = state.products.allProducts.filter(
        (product: any) => product.name.toLowerCase().includes(action.payload)
      );
    },
    getProductsStart: (state) => {
      state.products.isFetching = true;
    },
    getProductsSuccess: (state, action) => {
      state.products.isFetching = false;
      state.products.allProducts = action.payload;
    },
    getProductsError: (state) => {
      state.products.isFetching = false;
      state.products.error = true;
    }
  }
});

export const {
  getProductsError,
  getProductsStart,
  getProductsSuccess,
  filteredProducts
} = productSlice.actions;

export default productSlice.reducer;
