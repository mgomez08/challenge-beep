import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";

const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <React.Fragment>
      <h1>home</h1>
      <button onClick={handleLogout}>Logout</button>
    </React.Fragment>
  );
};

export default Home;
