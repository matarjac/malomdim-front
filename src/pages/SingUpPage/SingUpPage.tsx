import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInWindow, LogInDetailsContainer, LogInForm, StyledInput, StyledSubmitInput, StyledHref } from "../../StyledComponents/StyledSignInComponents";
import { GeneralSpan } from "../../StyledComponents/StyledLibrary";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <SignInWindow>
      <img src="./logo.svg" alt="" style={{ scale: "100%", padding: "20px 51px 30px 51px" }} />
      <LogInDetailsContainer>
        <GeneralSpan fontSize={28} fontWeight={600} style={{ padding: '10px' }}>Create Account</GeneralSpan>
        <GeneralSpan fontSize={16} fontWeight={400} style={{ padding: '10px' }}>Already have an account? <StyledHref onClick={() => navigate("/sign-in")}>Login</StyledHref> </GeneralSpan>
        <LogInForm>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <StyledInput type={'text'} placeholder={'First Name'} />
            <StyledInput type={'text'} placeholder={'Last Name'} />
          </div>
          <StyledInput type={'email'} placeholder={'Email Address'} />
          <StyledInput type={'password'} placeholder={'Password'} />
          <StyledSubmitInput type={'submit'} value="Create My Account" />
        </LogInForm>
      </LogInDetailsContainer>
    </SignInWindow>
  )
}

export default SignInPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import InputFiled from "../../componnents/inputFiled/inputFiled";
// import "../SingInPage/SingInPage.css";

// const SignUpPage = () => {
//   const navigation: any = useNavigate();
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [firstName, setFirstName] = useState<string>("");
//   const [lastName, setLastName] = useState<string>("");


//   return (
//     <div className="main">
//       <div className="singInCard">
//         <div className="info">
//           <span>SING UP</span>
//         </div>
//         <div className="inputField">
//           <InputFiled
//             label={"first name"}
//             onChange={(value: any) => setFirstName(value)}
//           />
//           <InputFiled
//             label={"last name"}
//             onChange={(value: any) => setLastName(value)}
//           />
//           <InputFiled
//             label={"Email address"}
//             onChange={(value: any) => setEmail(value)}
//           />
//           <InputFiled
//             type="password"
//             label={"Password"}
//             onChange={(value: any) => setPassword(value)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
