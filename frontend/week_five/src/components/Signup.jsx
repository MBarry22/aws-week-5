import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "react-use-localstorage";
import jwtDecode from "jwt-decode";
import './styles/SignUp.scss'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");


 
  const handleSubmit = async e => {
    e.preventDefault();
    
    try {
      const result = await axios.post("/api/signup", {email, password, displayName})
      console.log(result.data)
      

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <div className="wrapper">
    <div className="form-container">
      <h1>Signup</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br></br>
      <br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Display Name"
        value={displayName}
        onChange={e => setDisplayName(e.target.value)}
      />
      <br></br>
      <br></br>
      <input type="file" name="filename"></input>
      <br></br>
      <br></br>
      <button type="submit">Signup</button>
   
</form>
</div>
</div>
  )
}
export default Signup;