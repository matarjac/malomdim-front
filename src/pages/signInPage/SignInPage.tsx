import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInWindow, LogInDetailsContainer, LogInForm, StyledInput, StyledSubmitInput, StyledHref } from "../../StyledComponents/StyledSignInComponents";
import { GeneralSpan } from "../../StyledComponents/StyledLibrary";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const handleLogIn = (e: any) => {
    e.preventDefault();
    sessionStorage.setItem('user', 'hello');
    navigate("/");
  }
  return (
    <SignInWindow>
      <img src="./logo.svg" alt="" style={{ scale: "100%", padding: "20px 51px 30px 51px" }} />
      <LogInDetailsContainer>
        <GeneralSpan fontSize={28} fontWeight={600} style={{ padding: '10px' }}>LOGIN</GeneralSpan>
        <GeneralSpan fontSize={16} fontWeight={400} style={{ padding: '10px' }}>New? <StyledHref onClick={() => navigate("/sign-up")}>Create an account</StyledHref> </GeneralSpan>
        <LogInForm>
          <StyledInput type={'email'} placeholder={'Email Address'} />
          <StyledInput type={'password'} placeholder={'Password'} />
          <StyledSubmitInput onClick={(e) => { handleLogIn(e) }} type={'submit'} value="Log In" />
        </LogInForm>
      </LogInDetailsContainer>
    </SignInWindow>
  )
}

export default SignInPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import InputFiled from "../../componnents/inputFiled/inputFiled";

// import "./SingInPage.css";

// const SingInPage = () => {
//   const navigation: any = useNavigate();
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const CanLogIn: boolean = email.length > 5 && password.length > 8;

//   return (
//     <div className="main">
//       <div className="singInCard">
//         <div className="info">
//           <span>SIGN IN</span>
//           <p>To continue the order, please sign in</p>
//         </div>
//         <div className="inputField">
//           <InputFiled
//             label={"Email address"}
//             onChange={(value: any) => setEmail(value)}
//           />
//           <InputFiled
//             type="password"
//             label={"Password"}
//             onChange={(value: string) => setPassword(value)}
//           />
//         </div>
//         <div className="logInForgetPassword">
//           <button>login</button>
//         </div>
//         <div className="orDiv">
//           <hr />
//           <span>or</span>
//           <hr />
//         </div>
//         <button onClick={() => navigation("/SingUpPage")}>sign up</button>
//       </div>
//     </div>
//   );
// };
// export default SingInPage;