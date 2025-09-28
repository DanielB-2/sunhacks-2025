import { Link } from "react-router-dom";
import {useEffect } from 'react';

export function TopBar() {
  useEffect(() => {
      let username = localStorage.getItem("username");
      console.log("username: " + username);
        if (username != "") {
          document.getElementById("signup-button").classList.add("hidden");
          document.getElementById("login-button").classList.add("hidden");

          let profileButton = document.getElementById("profile");
          profileButton.innerHTML = username;
          profileButton.classList.remove("hidden");
          
          //unhide the logout button
          document.getElementById("logout-button").classList.remove("hidden");
        }
        
     });
  return (
    <div className="bg-[#85ad5c] shadow-xl h-[72px] flex justify-between items-center px-8 text-white">
      <Link to="/" className="flex items-center space-x-2 cursor-pointer hover:underline font-semibold text-xl">
          <img className="h-10 w-10" src="Logo.jpg" alt="Logo" />
          <span>RecycleX</span>
        </Link>
     
      
      
      <div className="flex space-x-8">
       
        <Link
          to="/leaderboard"
          className="cursor-pointer hover:underline"
        >
          Leaderboard
        </Link>
        
        <Link
          to="/about"
          className="cursor-pointer hover:underline"
        >
          About
        </Link>

        
        <Link
          to="/scan"
          className="flex items-center space-x-2 cursor-pointer hover:underline"
        >
          <span>Scan</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-scan-line-icon"
          >
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            <path d="M7 12h10" />
          </svg>
        </Link>

        <Link
          to="/signup"
          className="cursor-pointer hover:underline"
          id="signup-button"
        >
          SignUp
        </Link>

        <Link
          to="/login"
          id="login-button"
          className="cursor-pointer hover:underline"
        >
          Login
        </Link>

        <p className="hidden font-bold" id="profile"> </p>
        <Link id="logout-button" className="hidden cursor-pointer hover:underline" onClick={() => {
              console.log("signing up")
              //store userinfo to local storage
              localStorage.setItem("email", "");
              localStorage.setItem("username", "");
              localStorage.setItem("password", "");


              console.log(localStorage)

              window.location.reload()

          }}>Logout</Link>
      </div>
    </div>
  );
}
