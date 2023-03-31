import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updatedCurrentMainSub,
  updatedMainSub,
} from "../../store/Slicers/mainSub";
import { setSubTopic } from "../../store/Slicers/subTopic";
import { RootState } from "../../store/store";
import {
  AddButton,
  AllLessonDiv,
  LessonsDivHeader,
  LessonsDivOption,
  MainSubList,
  SideBarContainer,
  StyledAvatar,
  StyledSideBar,
  StyleUser,
  UserName,
  UserNameTypeDiv,
  UserType,
} from "../../StyledComponents/sideBarStyled";
import { RemoveButton } from "../../StyledComponents/StyledGeneralComponents";
import { AddCodeSheetButton } from "../../StyledComponents/StyledLibrary";
import { IMainSub } from "../../Types/interface/dataInterfaces";
import { serverAddress } from "../../utility/serverAdress";
import AddMainTopicModalBox from "../AddMainTopicModalBox/AddMainTopicModalBox";
import AddStudentModalBox from "../AddStudentModalBox/AddStudentModalBox";
const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const mainSubject: IMainSub[] = useSelector(
    (state: RootState) => state.mainSub.mainSubList
  );
  const todayMainSubject = useSelector(
    (state: RootState) => state.mainSub.currentMainSub
  );

  const user = sessionStorage.getItem("user");
  const userData = user ? JSON.parse(user).role : "";
  const [isAdmin, setIsAdmin] = useState(userData == "teacher");
  const [selected, setSelected] = useState<string>(todayMainSubject);
  const [addLessonModal, setAddLessonModal] = useState<boolean>(false);
  const [addStudentModal, setAddStudentModal] = useState<boolean>(false);
  const onClose = () => {
    setAddLessonModal(false);
    setAddStudentModal(false);
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>, mainSubId: string) => {
    if (
      (e.target as HTMLElement).parentElement?.tagName.toLowerCase() ===
      "button"
    ) {
      handleDeleteButton(mainSubId);
    } else {
      setSelected(mainSubId);
    }
  };
  const handleDeleteButton = (deletedMainId: string) => {
    const mainSubConfirm = prompt(
      "Please enter 'delate' to confirm delate:",
      ""
    );
    if (mainSubConfirm === "delate") {
      delateMainSub(deletedMainId);
    } else {
      alert("not deleted");
    }
  };
  const delateMainSub = async (deletedMainId: string) => {
    try {
      const updatedMainSubList = await axios.delete(
        serverAddress + "/mainSub",
        {
          data: {
            id: deletedMainId,
          },
        }
      );
      const mainSubData = updatedMainSubList.data.data;
      dispatch(updatedMainSub(mainSubData));
      setSelected(mainSubData.todaySub._id);
    } catch (error: any) {
      console.log(error);
      alert(error.response.data.message);
      return [];
    }
  };

  useEffect(() => {
    dispatch(setSubTopic(selected));
    dispatch(updatedCurrentMainSub(selected));
  }, [selected, mainSubject]);

  return (
    <>
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
        {
          <AddCodeSheetButton
            onClick={() => {
              setAddStudentModal(true);
            }}
          >
            <img
              style={{ scale: "100%" }}
              src="./icons/addCodeSheet-icon.svg"
              alt=""
            />
            Student
          </AddCodeSheetButton>
        }
        <LessonsDivHeader>
          <AllLessonDiv>
            <img src="/icons/file.svg" alt="file" />
            <UserName>All Lessons</UserName>
          </AllLessonDiv>
          {/* <img src="/icons/addButton.svg" alt="add" /> */}
          <AddButton onClick={() => setAddLessonModal(true)} />
        </LessonsDivHeader>
        <MainSubList>
          {mainSubject &&
            mainSubject.map((mainSub) => (
              <LessonsDivOption
                isOn={selected === mainSub._id}
                onClick={(e) => handleClick(e, mainSub._id)}
                key={mainSub._id}
              >
                <UserName>{mainSub.title}</UserName>
                {!isAdmin && <img src="/icons/next.svg" alt="open" />}
                <RemoveButton isVisible={isAdmin} onClick={() => {}}>
                  <img src="./icons/delete-icon-x.svg" alt="" />
                </RemoveButton>
              </LessonsDivOption>
            ))}
        </MainSubList>
      </StyledSideBar>
      <AddMainTopicModalBox isShown={addLessonModal} onClose={onClose} />
      <AddStudentModalBox isShown={addStudentModal} onClose={onClose} />
    </>
  );
};

export default SideBar;
