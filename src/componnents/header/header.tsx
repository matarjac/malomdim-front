import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header: React.FC = () => {
  const navigat = useNavigate();

  return (
    <div>
      <div className="nav-bar">
        <button className="sing-up-btu" onClick={() => navigat("/")}>
          Home
        </button>
        <button className="sing-up-btu" onClick={() => navigat("/SingUpPage")}>
          Sing Up
        </button>
      </div>
    </div>
  );
};

export default Header;
