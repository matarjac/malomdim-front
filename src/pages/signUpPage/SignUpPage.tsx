import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInWindow, LogInDetailsContainer, LogInForm, StyledInput, StyledSubmitInput, StyledHref } from "../../StyledComponents/StyledSignInComponents";
import { GeneralSpan } from "../../StyledComponents/StyledLibrary";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const handleSignUp = (e: any) => {
    e.preventDefault();
    const firstName: string = e.target[0].value;
    const lastName: string = e.target[1].value;
    const email: string = e.target[2].value;
    const password: string = e.target[3].value;

    if (!(firstName && lastName && email && password)) {
      alert('Please fill all inputs.');
    } else {
      const userDetails = { firstName, lastName, email, password }
      console.log(userDetails);
      navigate("/sign-in");
    }
  }
  return (
    <SignInWindow>
      <img src="./logo.svg" alt="" style={{ scale: "100%", padding: "20px 51px 30px 51px" }} />
      <LogInDetailsContainer>
        <GeneralSpan fontSize={28} fontWeight={600} style={{ padding: '10px' }}>Create Account</GeneralSpan>
        <GeneralSpan fontSize={16} fontWeight={400} style={{ padding: '10px' }}>Already have an account? <StyledHref onClick={() => navigate("/sign-in")}>Login</StyledHref> </GeneralSpan>
        <LogInForm onSubmit={handleSignUp}>
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
