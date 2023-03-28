import React, { useEffect } from "react";
import SideBar from "../../componnents/sideBar/sideBar";
import Library from "../../componnents/library/Library";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import UserAddCode from "../../componnents/codeBlock/userAddCode/UserAddCode";

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
      {/* <UserAddCode/> */}
    </div>
  );
};

export default HomePage;
