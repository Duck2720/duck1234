import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { get } from "http";

function AddUsers() {
  const [usename, setUsename] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [validationMsg, setValidationMsg] = useState<any>("");

  interface Msg {
    usename?: string;
    email?: string;
    phone?: any;
    password?: any;
    address?: any;
  }

  const loadusers = async () => {
    await axios.get("http://localhost:3000/users");
  };

  useEffect(() => {
    loadusers();
  }, []);

  const navigate = useNavigate();
  const data = {
    usename,
    email,
    phone,
    password,
    address
  };
  console.log(data);
  const validateAll = () => {
    const msg: Msg = {};
    if (isEmpty(usename)) {
      msg.usename = "please input your usename ";
    }

    if (isEmpty(email)) {
      msg.email = "please input your email ";
    } else if (!isEmail(email)) {
      msg.email = "your email is incorect";
    }

    if (isEmpty(phone)) {
      msg.phone = "please input your phone ";
    }

    if (isEmpty(password)) {
      msg.password = "please input your password ";
    }

    if (isEmpty(address)) {
      msg.address = "please input your password ";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  function submitForm(e: { preventDefault: () => void }) {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    try {
      axios
        .post("http://localhost:3000/users", data)
        .then(navigate("/admin-users")!);
      toast.success("add succes", {
        position: "top-right"
      });
    } catch (err) {
      toast.error("add fail", {
        position: "top-right"
      });
    }
  }
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center mt-11">
      <h2 className="text-2xl font-bold">ADD USER</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={usename}
          onChange={(e) => setUsename(e.target.value)}
          className=" outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4 rounded-xl "
          type="text"
          placeholder="Enter your name"
          required
        />
        <p className="text-red-400 text-xs">{validationMsg.usename}</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4 rounded-xl"
          type="email"
          placeholder="Enter your email"
          required
        />
        <p className="text-red-400 text-xs">{validationMsg.email}</p>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className=" outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4 rounded-xl"
          type="phone"
          placeholder="Enter your phone no."
          required
        />
        <p className="text-red-400 text-xs">{validationMsg.phone}</p>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4 rounded-xl"
          type="password"
          placeholder="Enter your password."
          required
        />
        <p className="text-red-400 text-xs">{validationMsg.password}</p>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className=" outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4 rounded-xl"
          type="text"
          placeholder="Enter your address."
          required
        />
        <p className="text-red-400 text-xs">{validationMsg.address}</p>
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4 rounded-xl"
          type="button"
          onClick={submitForm}
        >
          ADD USER
        </button>
      </form>
    </div>
  );
}

export default AddUsers;
