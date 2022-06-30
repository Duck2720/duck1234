import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import CartReducer from "redux/features/Cart/CartSlice";
import authReducer from "../features/auth/authSlice";
import productsReducer from "../features/products/productsSlice";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: CartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persitor = persistStore(store);
