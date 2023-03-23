import React, { useState } from "react";
import "../mainSubjectBox/MainSubjectBox.css";

const MainSubjectBox: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleMenuToggleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className={`navigation ${active ? "active" : ""}`}>
        <div className="headerMainSubBox">
          <div className="mainSubBox">
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

export default MainSubjectBox;
