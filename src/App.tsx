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
import AdminUser from "modules/Admin/Users/AdminUser";
import AddUsers from "modules/Admin/Users/AddUsers";
import EditUsers from "modules/Admin/Users/EditUsers";
import PrivateRoute from "utils/PrivateRoute";
import ViewUsers from "modules/Admin/Users/ViewUsers";
import OrderDetail from "modules/User/Order/OrderDetail";
import OrderScreen from "modules/User/Order/Order";
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
          <Route path="/order" element={<OrderScreen />} />
          <Route path="/order-detail/:id" element={<OrderDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="" element={<AdminLayout />}>
          <Route index element={<Navigate to="/homeusers" />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin-users" element={<AdminUser />} />
            <Route path="/add-users" element={<AddUsers />} />
            <Route path="/edit-users/:id" element={<EditUsers />} />
            <Route path="/users/:id" element={<ViewUsers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
