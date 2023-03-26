import React from "react";
import Library from "../../componnents/library/Library";
import SubTopicContainer from "../../componnents/subTopicContainer/SubTopicContainer";


import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <Library />
      {/* <SubTopicContainer /> */}
    </div>
  );
};

export default HomePage;
