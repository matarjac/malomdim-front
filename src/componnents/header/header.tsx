import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Footer: React.FC = () => {
const navigat = useNavigate();

  return <div>
     <button className="sing-up-btu" onClick={() => navigat("/SingUpPage")}>Sing Up</button>
  </div>;
};

export default Footer;
