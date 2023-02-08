import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import axios from "axios";

export default function Profile() {
  const { user, updateToken } = useContext(AuthContext)
  const [displayName, setDisplayName] = useState(user.displayName);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.put("/api/users/displayName", {displayName})
    console.log(result.data)
    const token = result.data.token
    window.localStorage.setItem("token", token)
  };
  return (
    <div>
      <h1>Profile</h1>
      <p>
        <span>Email:</span> {user.email}
      </p>
      <form onSubmit={onSubmit}>
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
