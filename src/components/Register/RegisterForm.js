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
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="youremail@company.com"
        onChange={handleChange}
        value={formValues.email}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        value={formValues.password}
      />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={handleChange}
        value={formValues.confirmPassword}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
