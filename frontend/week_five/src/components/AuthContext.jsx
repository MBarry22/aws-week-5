import { createContext } from "react";
import {useState, useEffect} from 'react'
import jwtDecode from "jwt-decode";
export const AuthContext = createContext();

export function AuthProvider ({children}){

    const [token, setToken] = useState("");
    const user = token && token.length ? jwtDecode(token) : null;

  const updateToken = (token )=> {
    localStorage.setItem("token", token)
    setToken(token)
  }
  
    useEffect(() =>{
      // use effect code can cause side effects
      // cann interact with the outside world
      // will always run inside the browser
  
      const token = localStorage.getItem("token")
      setToken(token)
  
      
    }, [])

    return(
        <AuthContext.Provider value={{user, token, updateToken}}>
          {children} 
        </AuthContext.Provider>
    )
}