import styled from "styled-components";

interface ICubeColor {
  type: string;
}

export const MainCubePart = styled.div`
  display: flex;
  cursor: pointer;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: flex-end;
  width: 100%;
  height: 56px;
`;

export const Cube = styled.div<ICubeColor>`
  display: flex;
  position: relative;
  flex-direction: column;
  cursor: pointer;
  background-color: #6553b8;
  border: 2px solid;
  border-color: ${(props: any) =>
    props.type === "text"
      ? "#8471df"
      : props.type === "code"
      ? "rgba(102, 219, 156, 1)"
      : "rgb(248 103 141)"};
  border-radius: 8px;
  width: 88.24px;
  height: 98.03px;
  filter: drop-shadow(0px 0px 14.0061px rgba(0, 0, 0, 0.07));
  transition: 0.1s;
  &:hover {
    scale: 1.03;
  }
`;

export const CubeDescription = styled.div<ICubeColor>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 30%;
  /* background: #8471df; */
  background-color: ${(props: any) =>
    props.type === "text"
      ? "#8471df"
      : props.type === "code"
      ? "rgba(102, 219, 156, 1)"
      : "rgb(248 103 141)"};
  border-radius: 0px 0px 5.60244px 5.60244px;
  font-family: "Poppins";
  font-style: normal;
  text-align: start;
  font-weight: 400;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  color: white;
  margin-top: 20px;
`;
