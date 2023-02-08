import { createContext } from "react";
import {useState, useEffect} from 'react'
import jwtDecode from "jwt-decode";
export const AuthContext = createContext();

export function AuthProvider ({children}){

    const [token, setToken] = useState("");
    const [user, setUser] = useState("")
    
    const updateToken = (token )=> {
      localStorage.setItem("token", token)
      setToken(token)
    }
        
    
    useEffect(() => {
      const token = localStorage.getItem("token")
  
      if(token){
        const user = jwtDecode(token);
        console.log(user);
        
        setUser(user);
        
      }
    }, [token]);



    return(
        <AuthContext.Provider value={{user, token, updateToken, setUser}}>
          {children} 
        </AuthContext.Provider>
    )
}