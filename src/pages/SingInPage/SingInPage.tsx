import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFiled from "../../componnents/inputFiled/inputFiled";

import "./SingInPage.css";

const SingInPage = () => {
  const navigation: any = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const CanLogIn: boolean = email.length > 5 && password.length > 8;

  return (
    <div className="main">
      <div className="singInCard">
        <div className="info">
          <span>SIGN IN</span>
          <p>To continue the order, please sign in</p>
        </div>
        <div className="inputField">
          <InputFiled
            label={"Email address"}
            onChange={(value: any) => setEmail(value)}
          />
          <InputFiled
            type="password"
            label={"Password"}
            onChange={(value: string) => setPassword(value)}
          />
        </div>
        <div className="logInForgetPassword">
          <button>login</button>
        </div>
        <div className="orDiv">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <button onClick={() => navigation("/SingUpPage")}>sign up</button>
      </div>
    </div>
  );
};
export default SingInPage;
