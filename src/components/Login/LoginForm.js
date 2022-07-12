import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";

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
    dispatch(startLogin(formValues.email, formValues.password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="youremail@company.com"
        value={formValues.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formValues.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
