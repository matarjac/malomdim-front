import styled from "styled-components";

interface IRemoveButton {
  isVisible: boolean;
}

export const RemoveButton = styled.button<IRemoveButton>`
  all: unset;
  cursor: pointer;
  border-radius: 50%;
  background-color: red;
  color: white;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  position: absolute;
  right: 0px;
  top: 0px;
  transform: translate(30%, -15%);
  z-index: 0;
  display: ${(props) => (props.isVisible ? "inline-block" : "none")};
`;
