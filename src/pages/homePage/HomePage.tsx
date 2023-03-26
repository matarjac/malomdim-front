import React from "react";
import Hero from "../../componnents/hero/Hero";
import SideBar from "../../componnents/sideBar/sideBar";
import SubTopicContainer from "../../componnents/subTopicContainer/SubTopicContainer";

import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <SideBar />
      <Hero />
      {/* <SubTopicContainer /> */}
    </div>
  );
};

export default HomePage;
