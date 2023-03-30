import styled from "styled-components";
interface IMainSubCheck {
  isOn: boolean;
}
export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  display: flex;
  padding: 20px 8px;
  gap: 24px;
  width: 240px;
  background: #232245;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.18);
  border-radius: 0px;
`;
export const StyleUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;
`;
export const UserNameTypeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserName = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
`;
export const UserType = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #8785a4;
`;
export const StyledAvatar = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  aspect-ratio: 1;
  height: 44px;
  background: #66db9c;
  border-radius: 50%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
`;
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: flex-start;
  padding: 10px 0px;
  gap: 10px;
`;
export const LessonsDivHeader = styled(StyleUser)`
  width: 100%;
  justify-content: space-between;
  text-transform: capitalize;
  padding: 13px 10px;
  border-radius: 5.9322px;
`;
export const LessonsDivOption = styled(LessonsDivHeader)<IMainSubCheck>`
  cursor: pointer;
  position: relative;
  text-transform: capitalize;
  color: white;
  width: 95%;
  background: ${(props) => (props.isOn ? "#8471DF" : "")};
  &:hover {
    background-color: ${(props) => (props.isOn ? "#8471DF" : "#44426c")};
  }
`;
export const AllLessonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const AddButton = styled.div`
  background-image: url("/icons/addButton.svg");
  background-size: cover;
  alt: "add";
  height: 34px;
  aspect-ratio: 1;
  border-radius: 5.9322px;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    scale: 1.02;
  }
`;
export const MainSubList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  gap: 10px;
  overflow-x: visible;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-top: 5px;
`;
