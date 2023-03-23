import React from "react";
import Hero from "../../componnents/hero/Hero";
import SubTopicContainer from "../../componnents/subTopicContainer/SubTopicContainer";


import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <SubTopicContainer />
    </div>
  );
};

export default HomePage;
