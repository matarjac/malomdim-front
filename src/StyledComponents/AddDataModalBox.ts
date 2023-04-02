import styled from "styled-components";

interface IModalContentSize {
  width: number;
  height: number;
}
interface ISendEmail {
  isSent: boolean;
}
export const ModalOverLay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(19, 18, 52, 0.57);
  width: "100vw";
  height: "100vh";
  z-index: 1000;
`;

export const ModalBoxContent = styled.div<IModalContentSize>`
  width: ${(props) => props.width}%;
  height: fit-content;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #2d2b52;
  display: flex;
  flex-direction: column;
  padding: 30px 50px 60px;
  border-radius: 18px;
  gap: 20px;
  z-index: 2;
  box-shadow: 0px 4px 46px rgba(0, 0, 0, 0.2);
`;

export const StyledTextArea = styled.textarea`
  all: unset;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ffffff;
  align-items: center;
`;

export const StyledDurationButtons = styled.button`
  all: unset;
  cursor: pointer;
  height: 25px;
  align-content: center;
  align-items: center;
  text-align: center;
  width: 25px;
  padding: 5px;
  border: 1px solid #ffffff;
  border-radius: 10px;
`;

export const StyledAddButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 6px;
  height: 44px;
  text-align: center;
  color: white;
  background-color: rgba(132, 113, 223, 1);
  padding: 7px;
  font-size: 13px;
  font-weight: 400;
`;

export const LoadingDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2d2b52;
  border-radius: 18px;
`;
export const EmailButton = styled.button<ISendEmail>`
  background-color: ${(props) => (props.isSent ? "rgb(25 192 50)" : "#2d2b52")};
  position: absolute;
  right: 60px;
  border: none;
  outline: none;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 5px;
  transition: 0.2s cubic-bezier(1, 0.1, 0.76, 0.63);
  &:hover {
    background-color: rgb(25 192 50);
    border: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
`;
