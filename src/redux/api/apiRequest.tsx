import axios from "axios";
import { Dispatch } from "redux";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess
} from "../features/auth/authSlice";
import {
  getProductsError,
  getProductsStart,
  getProductsSuccess
} from "../features/products/productsSlice";

interface Login {
  email: string;
  password: string;
}

interface Register {
  usename: string;
  email: string;
  password: string;
}

export const loginUser = async (
  user: Login,
  dispatch: Dispatch,
  navigate: any
) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3000/login", user);
    dispatch(loginSuccess(res.data));
    if (res.data.user.isAdmin === false) {
      navigate("/home");
    } else {
      navigate("/admin");
    }
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const registerUser = async (
  user: Register,
  dispatch: Dispatch,
  navigate: any
) => {
  dispatch(registerStart());
  try {
    await axios.post("http://localhost:3000/register", user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (error) {
    dispatch(registerFailed());
  }
};

export const getAllProducts = async (dispatch: Dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await axios.get("http://localhost:3000/posts");
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsError());
  }
};
