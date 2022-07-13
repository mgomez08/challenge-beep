import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/Register/RegisterForm";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-page d-flex justify-content-center m-auto text-center flex-column">
      <h1 className="h1 mb-3">¡Regístrate en ChallengeApp!</h1>
      <RegisterForm />
      <p className="mt-3 lead">
        Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
      </p>
    </div>
  );
};

export default Register;
