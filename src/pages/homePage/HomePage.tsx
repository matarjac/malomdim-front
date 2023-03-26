import React from "react";
import SideBar from "../../componnents/sideBar/sideBar";
import Library from "../../componnents/library/Library";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="pageFrame">
      <SideBar />
      <Library />
    </div>
  );
};

export default HomePage;
