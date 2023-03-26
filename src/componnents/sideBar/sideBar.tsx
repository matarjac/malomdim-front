import React, { useState, useEffect } from "react";
import {
  AddButton,
  AllLessonDiv,
  LessonsDivHeader,
  LessonsDivOption,
  SideBarContainer,
  StyledAvatar,
  StyledSideBar,
  StyleUser,
  UserName,
  UserNameTypeDiv,
  UserType,
} from "../../StyledComponents/sideBarStyled";
const SideBar: React.FC = () => {
  const [selected, setSelected] = useState<string>("");
  useEffect(() => {
    setSelected("HTML");
  }, []);
  return (
    <StyledSideBar>
      <SideBarContainer>
        <StyleUser>
          <StyledAvatar>
            <span>MJ</span>
          </StyledAvatar>
          <UserNameTypeDiv>
            <UserName>Matar Jacob</UserName>
            <UserType>Student</UserType>
          </UserNameTypeDiv>
        </StyleUser>
      </SideBarContainer>
      <SideBarContainer>
        <LessonsDivHeader>
          <AllLessonDiv>
            <img src="/icons/file.svg" alt="file" />
            <UserName>All Lessons</UserName>
          </AllLessonDiv>
          {/* <img src="/icons/addButton.svg" alt="add" /> */}
          <AddButton onClick={() => console.log("add")} />
        </LessonsDivHeader>
        <LessonsDivOption
          isOn={selected === "HTML"}
          onClick={(e) => setSelected("HTML")}
        >
          <UserName>HTML</UserName>
          <img src="/icons/next.svg" alt="open" />
        </LessonsDivOption>
        <LessonsDivOption
          isOn={selected === "CSS"}
          onClick={(e) => setSelected("CSS")}
        >
          <UserName>CSS</UserName>
          <img src="/icons/next.svg" alt="open" />
        </LessonsDivOption>
        <LessonsDivOption
          isOn={selected === "REACT"}
          onClick={(e) => setSelected("REACT")}
        >
          <UserName>REACT</UserName>
          <img src="/icons/next.svg" alt="open" />
        </LessonsDivOption>
        <LessonsDivOption
          isOn={selected === "JAVASCRIPT"}
          onClick={(e) => setSelected("JAVASCRIPT")}
        >
          <UserName>JAVASCRIPT</UserName>
          <img src="/icons/next.svg" alt="open" />
        </LessonsDivOption>
      </SideBarContainer>
    </StyledSideBar>
  );
};

export default SideBar;
