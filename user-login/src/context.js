import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialUserInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};
function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [error, setError] = useState(null);

  const register = async (user) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/register",
        user
      );
      setUserInfo(data);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    }
  };

  const login = async (user) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        user
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUserInfo(data);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ userInfo, error, register, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
