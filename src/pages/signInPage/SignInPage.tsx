import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInWindow, LogInDetailsContainer, LogInForm, StyledInput, StyledSubmitInput, StyledHref } from "../../StyledComponents/StyledSignInComponents";
import { GeneralSpan } from "../../StyledComponents/StyledLibrary";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogIn = (e: any) => {
    e.preventDefault();
    const email: string = e.target[0].value;
    const password: string = e.target[1].value;

    if (!(email && password)) {
      alert('Please fill all inputs.');
    } else {
      const credentials = { email, password }
      sessionStorage.setItem('user', JSON.stringify(credentials));
      navigate("/");
    }
  }
  return (
    <SignInWindow>
      <img src="./logo.svg" alt="" style={{ scale: "100%", padding: "20px 51px 30px 51px" }} />
      <LogInDetailsContainer>
        <GeneralSpan fontSize={28} fontWeight={600} style={{ padding: '10px' }}>LOGIN</GeneralSpan>
        <GeneralSpan fontSize={16} fontWeight={400} style={{ padding: '10px' }}>New? <StyledHref onClick={() => navigate("/sign-up")}>Create an account</StyledHref> </GeneralSpan>
        <LogInForm onSubmit={handleLogIn}>
          <StyledInput type={'email'} placeholder={'Email Address'} />
          <StyledInput type={'password'} placeholder={'Password'} />
          <StyledSubmitInput type={'submit'} value="Log In" />
        </LogInForm>
      </LogInDetailsContainer>
    </SignInWindow>
  )
}
export default SignInPage;
