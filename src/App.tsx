import SingleProduct from "modules/User/Products/SingleProduct/SingleProduct";
import HomePage from "pages/User/HomePage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import CartScreen from "modules/User/Cart/Cart";
import ClienLayout from "./layouts/client.layout";
import Login from "./modules/Auth/Login/Login";
import Register from "./modules/Auth/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ClienLayout />}>
          <Route index element={<Navigate to="/Home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart/:id" element={<CartScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
