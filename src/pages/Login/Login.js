import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/Login/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page d-flex justify-content-center m-auto text-center flex-column">
      <h1 className="h1 mb-4">¡Inicia sesión en ChallengeApp!</h1>
      <LoginForm />
      <p className="mt-3 lead">
        No tienes cuenta aún? <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default Login;
