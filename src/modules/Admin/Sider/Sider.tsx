import React from "react";
import { Link } from "react-router-dom";

const Sider = () => (
  <div>
    <header>
      <nav className="sidebar bg-teal-600 h-[120vh] ">
        <Link to="/admin-users">
          <img className="w-40 ml-10" src="./images/logo.png" alt="logo " />
        </Link>
        <div className="flex flex-col justify-center text-[25px] text-[#ffffff]">
          <Link className="" to="/admin-users">
            Dashboard
          </Link>
          <Link className="" to="/products">
            Products
          </Link>
          <Link className="" to="/products">
            Orders
          </Link>
          <Link className="" to="/admin-users">
            User
          </Link>
          <Link
            className="hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"
            to="/home"
          >
            Go to client
          </Link>
        </div>
      </nav>
    </header>
  </div>
);

export default Sider;
