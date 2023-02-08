import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import './styles/Profile.scss'
export default function Home() {
    const {user} = useContext(AuthContext)

 

  return (
    <div className="profile-container">
      {user
        ? <h1>Welcome {user.displayName}</h1>
        : <h1>Welcome User!</h1>
      }
    </div>
  );
}
