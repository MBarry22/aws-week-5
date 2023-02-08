import React, { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import './styles/Login.scss'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, token, setToken } = useContext(AuthContext)

  // ...
  const handleLogin = async (e) => {
    // ...
    if (response.token) {
      setToken(response.token);
    }
  };
  const handleSubmit = async (e) => {

    e.preventDefault();
    const result = await axios.post("/api/login", { email: email, password: password })
    console.log(result.data)
    const token = result.data.token
    localStorage.setItem("token", token)

  };


  return (
    <div className="wrapper">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <br></br>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}


