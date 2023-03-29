import styled from "styled-components";

export const Cube = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6553b8;
  border-radius: 5.60244px;
  width: 88.24px;
  height: 78.03px;
  filter: drop-shadow(0px 0px 14.0061px rgba(0, 0, 0, 0.07));
  transition: 0.1s;
  &:hover {
    scale: 1.03;
  }
`;
export const MainCubePart = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
`;

export const CubeDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  background: #8471df;
  border-radius: 0px 0px 5.60244px 5.60244px;
  font-family: "Poppins";
  font-style: normal;
  text-align: start;
  font-weight: 400;
  font-size: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  color: #ffffff;
`;
