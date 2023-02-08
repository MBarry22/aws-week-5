import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

export default function Profile() {
  const { user, token, setToken, setUser } = useContext(AuthContext)
  const [displayName, setDisplayName] = useState(user.displayName);

  const handleChangeName = async (e) => {
    e.preventDefault();
    const result = await axios.put(`/api/users/${user.sub}/displayName`, {
      displayName: displayName
    },
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      })


    console.log(result.data)
    setToken(result.data.accessToken);
    setDisplayName(result.data.displayName)
    setUser(result.data.user)
  }

  console.log('user', user)
  console.log('displayName', displayName)
  console.log('token', token)




  return (
    <div>
      <h1>Profile</h1>
      <img src={user.profileImage}></img>
      <p>
        <span>Email:</span> {user.email}
      </p>
      <p>
        <span>UserName:</span> {user.displayName}
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
