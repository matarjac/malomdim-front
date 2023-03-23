import React, { useState } from "react";
import "../subTopicBox/SubTopicBox.css";

const SubTopicBox: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleMenuToggleClick = () => {
    setActive(!active);
  };

  return (
    <div className="subTopicBox">
      <div className={`navigation ${active ? "active" : ""}`}>
        <div className="headerSubTopic">
          <div className="SubTopic">
            <div className="mainSubImg">
              <img src={"/icons/icon-css-official.svg"} alt="icon-css" />
            </div>
          </div>
          <div className="mainSubTitel">CSS</div>
          <div className="menuToggle" onClick={handleMenuToggleClick}>
            <div className="menuToggleBefore"></div>
            <div className="menuToggleAfter"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTopicBox;
