// App.js
// App.js
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { AuthContext, AuthProvider } from "./components/AuthContext";


export default function App() {
  const [page, setPage] = useState("login");

  
  
 
  function currentPage(){
    switch (page){
      case "login":
        return <Login></Login>;
      case "signup":
        return <Signup></Signup>;
      case "profile":
        return <Profile></Profile>; 
      case "home":
        return <Home></Home>;  
        default: 
        return "Page Doesn't Exist Yet!";
    }
  }

  function handlePageChange(page){
    setPage(page)
  }



  return (
    <AuthProvider>
    <div className="App">
      <Navbar onPageChange={handlePageChange}></Navbar>
      {currentPage()}
    </div>
    </AuthProvider>
  );
}
