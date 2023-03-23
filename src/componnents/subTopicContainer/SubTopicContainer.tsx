import React from "react";
import SubTopicBox from "./subTopicBox/SubTopicBox";


import "./SubTopicContainer.css";

const SubTopicContainer: React.FC = () => {
  return (
    <div className="SubTopicContainer">
      <SubTopicBox />
      <SubTopicBox />
    </div>
  );
};

export default SubTopicContainer;
