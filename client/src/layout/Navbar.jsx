// Navbar.js

import React, { useState } from "react";
import logo from "./logo-health.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [clickedLogin, setClickedLogin] = useState(false);

  const location = useLocation();

  const handleLoginClick = () => {
    setClickedLogin(true);
  };
  return (
    <nav className="bg-slate-50 h-20 px-4 py-2 flex justify-between items-center w-full">
      <div className="ml-20 w-20 h-30">
        <img src={logo} alt="img-logo" />
      </div>
      <div className="text-white font-bold text-xl">Medical Health</div>
      <div className="mr-20 flex gap-4">
        {location.pathname === "/" && !clickedLogin && (
          <Link
            to="/login"
            onClick={handleLoginClick}
            className="bg-orange-700 text-white font-sans p-3 rounded-lg tracking-tight hover:bg-orange-800"
          >
            Login/Registraion
          </Link>
        )}
        {location.pathname === "/" && !clickedLogin && (
          <Link
            onClick={handleLoginClick}
            className="bg-orange-700 text-white font-sans p-3 rounded-lg tracking-tight"
          >
            Admin Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
