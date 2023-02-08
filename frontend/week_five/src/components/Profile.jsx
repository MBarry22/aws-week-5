import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

export default function Profile() {
  const { user, setToken,  } = useContext(AuthContext)
  const [displayName, setDisplayName] = useState(user.displayName);
  
  const handleChangeName = async (e) => {
    e.PreventDefault();
    const result = await axios.put("api/users/displayName",{
        displayName: displayName, email: user.email
    },
    {headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`  
        }
    })
    
    if(result.data.status == "ok"){
        console.log(result.data)
        setToken(result.data.accessToken)
    }
    
  }
 
  
  
  return (
    <div>
      <h1>Profile</h1>
      <img src={user.profileImage}></img>
      <p>
        <span>Email:</span> {user.email}
      </p>
      <form onSubmit={handleChangeName}>
        <div>
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
