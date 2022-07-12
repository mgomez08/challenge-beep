import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, restricted, logged }) => {
  return logged && restricted ? <Navigate to="/" /> : children;
};
