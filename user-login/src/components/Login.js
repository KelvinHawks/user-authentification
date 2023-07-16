import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

function Login() {
  const navigate = useNavigate();

  const { userInfo, login, error } = useContext(AuthContext);
  const [details, setDetails] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(details);
    setDetails({ username: "", password: "" });
  };

  useEffect(() => {
    if (userInfo.token) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  return (
    <div>
      <form>
        {error && (
          <div className="err-cont">
            <p>{error}</p>
          </div>
        )}
        <label for="email">Email</label>
        <input type="text" name="email" onChange={handleChange} />
        <label for="password">Password</label>
        <input type="text" name="password" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
