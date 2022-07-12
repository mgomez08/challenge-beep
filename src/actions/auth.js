import types from "../types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const startRegister = (email, password) => async (dispatch) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    localStorage.setItem("accessToken", user.accessToken);
    dispatch(register(user));
  } catch (error) {
    console.log(error);
  }
};

const register = (user) => {
  return {
    type: types.AUTH_REGISTER,
    payload: user,
  };
};

export const startLogin = (email, password) => async (dispatch) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("accessToken", user.accessToken);
    dispatch(login(user));
  } catch (error) {
    console.log(error);
  }
};

export const login = (user) => {
  return {
    type: types.AUTH_LOGIN,
    payload: user,
  };
};

export const checkingFinish = () => {
  return {
    type: types.AUTH_CHECKING_FINISH,
  };
};

export const logout = () => {
  signOut(auth);
  localStorage.removeItem("accessToken");
  return {
    type: types.AUTH_LOGOUT,
  };
};
