import { createContext } from "react";
import { useState, useEffect } from 'react'
import jwtDecode from "jwt-decode";
export const AuthContext = createContext();

export function AuthProvider({ children }) {

  let [token, setToken] = useState("");
  let [user, setUser] = useState(null);

  user = token ? jwtDecode(token) : null;

  // const updateToken = (token) => {
  //   localStorage.setItem("token", token)
  //   setToken(token)
  // }


  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      const user = jwtDecode(token);
      console.log(user);

      setToken(token)

    }
  }, [token]);

  console.log('token', token)

  return (
    <AuthContext.Provider value={{ user, token, setToken, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}