/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import axios from "axios";

interface User {
  email: string;
  password: string;
}

function Login() {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [success, setSucces] = useState<Boolean>(false);
  function handleAPI() {
    axios.post("http://reques.in/api/login", {}).then((result) => {
      console.log(result.data);
    });
    setSucces(true);
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {success ? (
        <div>
          <h1>U are login</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </div>
      ) : (
        <div className="container d-flex flex-column justify-content-center align-items-center login-center">
          <form className="Login col-md-8 col-lg-4 col-11">
            <input
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              value={pwd}
              type="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              required
            />
            <button type="submit" onClick={handleAPI}>
              Login
            </button>
            <p>
              <Link to={"/register"}>Create Account</Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
