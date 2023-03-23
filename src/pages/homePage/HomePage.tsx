import React from "react";
import Hero from "../../componnents/hero/Hero";
import MainSubjectBox from "../../componnents/mainSubjectBox/MainSubjectBox";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <MainSubjectBox />
      <Hero />
    </div>
  )
};

export default HomePage;
