import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { checkingFinish, login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Header from "../components/Header/Header";
import Home from "../pages/Home";
import { startSetMovies } from "../actions/movies";
import Loader from "../components/Other/Loader/Loader";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, logged } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
        dispatch(startSetMovies());
      } else {
        dispatch(checkingFinish());
      }
    });
  }, [dispatch]);
  if (checking) return <Loader />;

  return (
    <BrowserRouter>
      {logged && <Header />}
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute restricted={true} logged={logged}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted={true} logged={logged}>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute logged={logged}>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
