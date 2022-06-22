/* eslint-disable prettier/prettier */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "redux/api/apiRequest";
import "./Login.scss";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newUser = {
      email,
      password
    };
    loginUser(newUser, dispatch, navigate);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p>
            <Link to={"/register"}>Create Account</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
