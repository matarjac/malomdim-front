import React, { useEffect } from "react";
import SideBar from "../../componnents/sideBar/sideBar";
import Library from "../../componnents/library/Library";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const user = sessionStorage.getItem('user');
  const navigate = useNavigate();
  useEffect(()=>{
    if(!user){
      navigate('/sign-in');
    }
  },[])
  return (
    <div className="pageFrame">
      <SideBar />
      <Library />
    </div>
  );
};

export default HomePage;
