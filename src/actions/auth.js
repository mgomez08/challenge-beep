import types from "../types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
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
    dispatch(setError(error.code));
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
    dispatch(setError(error.code));
  }
};

export const login = (user) => {
  return {
    type: types.AUTH_LOGIN,
    payload: user,
  };
};

export const startLoginWithGoogle = () => async (dispatch) => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, googleProvider);
    localStorage.setItem("accessToken", user.accessToken);
    dispatch(login(user));
  } catch (error) {
    dispatch(setError(error.code));
  }
};

export const checkingFinish = () => {
  return {
    type: types.AUTH_CHECKING_FINISH,
  };
};

export const logout = () => {
  signOut(auth);
  localStorage.removeItem("accessToken");
  localStorage.removeItem("movies");
  return {
    type: types.AUTH_LOGOUT,
  };
};

export const setError = (error) => {
  return {
    type: types.AUTH_ERROR,
    payload: error,
  };
};
