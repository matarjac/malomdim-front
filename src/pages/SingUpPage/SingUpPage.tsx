import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFiled from "../../componnents/inputFiled/inputFiled";
import "../SingInPage/SingInPage.css";

const SingUpPage = () => {
  const navigation: any = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");


  return (
    <div className="main">
      <div className="singINCard">
        <div className="info">
          <span>SING UP</span>
        </div>
        <div className="inputField">
          <InputFiled
            label={"first name"}
            onChange={(value: any) => setFirstName(value)}
          />
          <InputFiled
            label={"last name"}
            onChange={(value: any) => setLastName(value)}
          />
          <InputFiled
            label={"Email address"}
            onChange={(value: any) => setEmail(value)}
          />
          <InputFiled
            type="password"
            label={"Password"}
            onChange={(value: any) => setPassword(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SingUpPage;
