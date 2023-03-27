import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSubTopic } from "../../store/Slicers/subTopic";
import { RootState } from "../../store/store";
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
import { IMainSub } from "../../Types/interface/dataInterfaces";
const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const mainSubject: IMainSub[] = useSelector(
    (state: RootState) => state.mainSub.mainSubList
  );
  const todayMainSubject = useSelector(
    (state: RootState) => state.mainSub.currentMainSub
  );
  const [selected, setSelected] = useState<string>(todayMainSubject);
  useEffect(() => {
    dispatch(setSubTopic(selected));
  }, [selected]);
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
        {mainSubject &&
          mainSubject.map((mainSub) => (
            <LessonsDivOption
              isOn={selected === mainSub._id}
              onClick={(e) => setSelected(mainSub._id)}
              key={mainSub._id}
            >
              <UserName>{mainSub.title}</UserName>
              <img src="/icons/next.svg" alt="open" />
            </LessonsDivOption>
          ))}
      </SideBarContainer>
    </StyledSideBar>
  );
};

export default SideBar;
