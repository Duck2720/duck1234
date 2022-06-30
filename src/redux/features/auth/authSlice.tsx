import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: [],
      isFetching: false,
      error: false
    },
    register: {
      isFetching: false,
      error: false,
      success: false
    }
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
      toast.success("login success", {
        position: "top-right"
      });
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
      toast.error("login fail", {
        position: "top-right"
      });
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.success = true;
      state.register.error = false;
      toast.success("register success", {
        position: "top-right"
      });
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
      toast.error("register fail", {
        position: "top-right"
      });
    },
    logout: (state) => {
      state.login.currentUser = [];
    }
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  registerFailed,
  registerStart,
  registerSuccess,
  logout
} = authSlice.actions;

export default authSlice.reducer;
