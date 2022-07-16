import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/api/apiRequest";

function Register(): JSX.Element {
  const [usename, setUsename] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newUser = {
      usename,
      email,
      password,
      phone,
      address
    };
    registerUser(newUser, dispatch, navigate);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center login-center">
      <form
        className="Login col-md-8 col-lg-4 col-11"
        onSubmit={handleRegister}
      >
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsename(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />

        <button type="submit">Register</button>
        <p>
          <Link to={"/login"}>
            I Have Account <strong>Login</strong>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
