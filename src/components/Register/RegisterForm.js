import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startRegister } from "../../actions/auth";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(startRegister(formValues.email, formValues.password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@company.com"
          onChange={handleChange}
          value={formValues.email}
          className="form-control"
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          onChange={handleChange}
          value={formValues.password}
          className="form-control"
        />
        <label htmlFor="password">Contraseña</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Repetir contraseña"
          onChange={handleChange}
          value={formValues.confirmPassword}
          className="form-control"
        />
        <label htmlFor="confirmPassword">Repetir Contraseña</label>
      </div>
      <button className="btn btn-primary w-100" type="submit">
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;
