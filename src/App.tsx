import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import SingleProduct from "modules/User/Products/SingleProduct/SingleProduct";
import HomePage from "pages/User/HomePage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import CartScreen from "modules/User/Cart/Cart";
import Profile from "modules/User/Profile/ProfileDetail/Profile";
import NotFound from "components/NotFound/NotFound";
import AdminLayout from "layouts/admin.layout";
import ClienLayout from "./layouts/client.layout";
import Login from "./modules/Auth/Login/Login";
import Register from "./modules/Auth/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer limit={2} />
      <Routes>
        <Route path="" element={<ClienLayout />}>
          <Route index element={<Navigate to="/Home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart/" element={<CartScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
