import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid flex-column flex-sm-row gap-2">
          <p className="navbar-brand">ChallengeApp</p>
          <button onClick={handleLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
