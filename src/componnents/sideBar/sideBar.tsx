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
import { IMainSub } from "../../Types/interface/dataInterfaces";
import { serverAddress } from "../../utility/serverAdress";
import AddMainTopicModalBox from "../AddMainTopicModalBox/AddMainTopicModalBox";
const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const mainSubject: IMainSub[] = useSelector(
    (state: RootState) => state.mainSub.mainSubList
  );
  const todayMainSubject = useSelector(
    (state: RootState) => state.mainSub.currentMainSub
  );
  const [selected, setSelected] = useState<string>(todayMainSubject);
  const [addLessonModal, setAddLessonModal] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const onClose = () => {
    setAddLessonModal(false);
  };

  const handleDeleteButton = (deletedMainId: string, title: string) => {
    const mainSubConfirm = prompt(
      "Please enter '" + title + "' to confirm delate:",
      ""
    );
    if (mainSubConfirm === title) {
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
                onClick={(e) => setSelected(mainSub._id)}
                key={mainSub._id}
              >
                <UserName>{mainSub.title}</UserName>
                {!isAdmin && <img src="/icons/next.svg" alt="open" />}
                <RemoveButton isVisible={isAdmin} onClick={() => { handleDeleteButton }}><img src="./icons/delete-icon-x.svg" alt="" /></RemoveButton>
              </LessonsDivOption>
            ))}
        </MainSubList>
      </StyledSideBar>
      <AddMainTopicModalBox isShown={addLessonModal} onClose={onClose} />
    </>
  );
};

export default SideBar;
