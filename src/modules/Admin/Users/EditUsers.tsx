import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Add() {
  const [usename, setUsename] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.patch(`http://localhost:3000/users/${id}`).then((res) => {
      setUsename(res.data.usename);
      setEmail(res.data.email);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    usename,
    email
  };

  function Update(e: { preventDefault: () => void }) {
    e.preventDefault();
    axios
      .patch(`http://localhost:3000/users/${id}`, data)
      .then(navigate("/admin-users")!);
    toast.success("edit succes", {
      position: "top-right"
    });
  }
  return (
    <div className=" h-[100vh] flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={usename}
          onChange={(e) => setUsename(e.target.value)}
          className=" outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter your email"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE USER
        </button>
      </form>
    </div>
  );
}

export default Add;
