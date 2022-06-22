import React from "react";
import { Link } from "react-router-dom";

const CartScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div className="container">
      <div className=" alert alert-info text-center mt-3">
        Total Cart Products
        <Link className="text-success mx-2" to="/cart">
          (4)
        </Link>
      </div>
      {/* cartiterm */}
      <div className="cart-iterm row">
        <div className="remove-button d-flex justify-content-center align-items-center">
          <i className="fas fa-times" />
        </div>
        <div className="cart-image col-md-3">
          <img src="/images/2.png" alt="nike" />
        </div>
        <div className="cart-text col-md-5 d-flex align-items-center">
          <Link to="#">
            <h4>Nike Girls Shoe</h4>
          </Link>
        </div>
        <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
          <h6>QUANTITY</h6>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
          <h6>SUBTOTAL</h6>
          <h4>$456</h4>
        </div>
      </div>

      {/* End of cart iterms */}
      <div className="total">
        <span className="sub">total:</span>
        <span className="total-price">$567</span>
      </div>
      <hr />
      <div className="cart-buttons d-flex align-items-center row">
        <Link to="/" className="col-md-6 ">
          <button type="button">Continue To Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default CartScreen;
