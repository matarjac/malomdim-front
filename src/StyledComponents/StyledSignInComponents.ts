import styled from "styled-components";

export const SignInWindow = styled.div`
  width: 851.86px;
  height: 645.46px;
  background-color: #1B1A3A;
  border-radius: 21.3559px;
  box-shadow: 0px 4.74576px 30.8475px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 80px 0px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const LogInDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 0px 50px;
`

export const StyledHref = styled.button`
    all: unset;
    color: #66DB9C;
    text-decoration: underline;
    font-size: 16px;
    font-weight: 400px;
    cursor: pointer;
`

export const LogInForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const StyledInput = styled.input`
    all: unset;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid #FFFFFF;
    border-radius: 10px;  
    ::placeholder{
        color: white;
    }
`

export const StyledSubmitInput = styled.input`
    all: unset;
    box-sizing: border-box;
    padding: 12px;
    color: white;
    background-color: #8471DF;
    border-radius: 10px; 
    text-align: center;
    cursor: pointer;   
`