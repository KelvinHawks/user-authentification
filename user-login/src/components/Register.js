import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { AuthContext } from "../context";

function Register() {
  const navigate = useNavigate();

  const { userInfo, register, error } = useContext(AuthContext);
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    register(inputValues);
    setInputValues({ username: "", email: "", password: "" });
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return (
    <form>
      {error && (
        <div className="err-cont">
          <p>{error}</p>
        </div>
      )}
      <label htmlFor="username">Name</label>
      <input type="text" name="username" onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" onChange={handleChange} />
      <button onClick={handleSubmit}>Register</button>
    </form>
  );
}

export default Register;
