import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInWindow, LogInDetailsContainer, LogInForm, StyledInput, StyledSubmitInput, StyledHref } from "../../StyledComponents/StyledSignInComponents";
import { GeneralSpan } from "../../StyledComponents/StyledLibrary";
import axios from 'axios';
import { serverAddress } from "../../utility/serverAdress";

interface IUserDetails {
  first_name: string,
  last_name: string,
  email: string,
  password: string
}

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();


  const handleSignUp = (e: any) => {
    e.preventDefault();
    const body: IUserDetails = {
      first_name: e.target[0].value,
      last_name: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
    }

    if (!(body.first_name && body.last_name && body.email && body.password)) {
      alert('Please fill all inputs.');
    } else {
      signUpUser(body);
      navigate("/sign-in");
    }
  }

  const signUpUser = async (body: IUserDetails) => {
    try {
      const { data } = await axios.post(serverAddress + '/user/signup', body)
      console.log("data>>> ", data);
    }
    catch (err: any) {
      console.log(err)
      alert(err.response.data);
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

export default SignUpPage;
