import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginForm from "../../components/Login/LoginForm";
import "./Login.css";
import googleIcon from "../../assets/png/icon-google.png";
import { startLoginWithGoogle } from "../../actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const handleGoogleLogin = () => {
    dispatch(startLoginWithGoogle());
  };
  return (
    <div className="login-page d-flex justify-content-center m-auto text-center flex-column">
      <h1 className="h1 mb-4">¡Inicia sesión en ChallengeApp!</h1>
      <LoginForm />
      <p className="mt-3 lead">O Inicia sesión con</p>
      <button className="btn btn-dark border-dark" onClick={handleGoogleLogin}>
        <img src={googleIcon} alt="icon google"></img>Google
      </button>
      <p className="mt-3 lead">
        No tienes cuenta aún? <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default Login;
