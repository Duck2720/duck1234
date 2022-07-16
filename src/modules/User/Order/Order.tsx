import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { clearCart } from "redux/features/Cart/CartSlice";
import { CartItems } from "../Cart/Cart";
import "./Order.scss";

const OrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const users = useSelector((state: any) => state.auth.login.currentUser.user);

  const [formData, setFormData] = useState({
    name: users.usename,
    email: users.email,
    phone: users.phone,
    address: users.address
  });
  const [formProduct] = useState(cart.cartItems);
  const handleChange = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };

  const hanleAddToDb = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:3000/orders", {
          ...formData,
          orderDetail: [...formProduct],
          total: cart.cartTotalAmount
        })
        .then(navigate("/profile")!);
      dispatch(clearCart());
      toast.success("add succes", {
        position: "top-right"
      });
    } catch (error) {
      toast.error("add fail", {
        position: "top-right"
      });
    }
  };

  return (
    <div className="container">
      <form className="row form-container">
        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-fn">UserName</label>
            <input
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="form-control"
              type="text"
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-email">E-mail Address</label>
            <input
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="form-control"
              type="email"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-pass">Phone</label>
            <input
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="form-control"
              type="text"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-confirm-pass">Address</label>
            <input
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="form-control"
              type="text"
              required
            />
          </div>
        </div>
      </form>
      <div className="row order-products justify-content-between">
        <div className="col-lg-8">
          {cart.cartItems?.map((CartItem: CartItems) => (
            // eslint-disable-next-line react/jsx-key
            <div
              key={CartItem.id}
              className="order-product row border-t-4 py-8"
            >
              <div className="col-md-3 col-6">
                <img src={CartItem.image} alt="product" />
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link to={`/`}>
                  <h6>{CartItem.name}</h6>
                </Link>
              </div>
              <div className="mt-3 mt-md-0 col-6 col-md-2  d-flex align-items-center flex-column justify-content-center ">
                <h4>QUANTITY</h4>
                <h6>{CartItem.cartQuantity}</h6>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center">
                <h4>SUBTOTAL</h4>
                <h6>${CartItem.price * CartItem.cartQuantity}</h6>
              </div>
            </div>
          ))}
        </div>
        {/* total */}
        <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <strong>Products</strong>
                </td>
                <td>${cart.cartTotalAmount}</td>
              </tr>
              <tr>
                <td>
                  <strong>Shipping</strong>
                </td>
                <td>Free</td>
              </tr>
              <tr>
                <td>
                  <strong>Tax</strong>
                </td>
                <td>Free</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>${cart.cartTotalAmount}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={hanleAddToDb} className="button-pay" type="button">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
