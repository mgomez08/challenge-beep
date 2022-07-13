import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setError, startLogin } from "../../actions/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.email || !formValues.password) {
      dispatch(setError("Todos los campos son obligatorios"));
    } else {
      dispatch(startLogin(formValues.email, formValues.password));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="youremail@company.com"
          value={formValues.email}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <label htmlFor="password">Contraseña</label>
      </div>

      <button className="btn btn-primary btn-lg w-100" type="submit">
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
