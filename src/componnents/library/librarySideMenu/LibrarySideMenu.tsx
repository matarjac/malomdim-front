import React, { useEffect, useState } from "react";
import {
  AddButton,
  AllLessonDiv,
  LessonsDivHeader,
  LessonsDivOption,
  MainSubList,
} from "../../../StyledComponents/sideBarStyled";
import {
  GeneralSpan,
  LibrarySideMenuContainer,
} from "../../../StyledComponents/StyledLibrary";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setSubTopic,
  updatedCurrentSubTopic,
  updatedSubTopic,
} from "../../../store/Slicers/subTopic";
import { RootState } from "../../../store/store";
import { ISubTopics } from "../../../Types/interface/dataInterfaces";
import AddSubTopicModalBox from "../../AddSubTopicModalBox/AddSubTopicModalBox";
import { RemoveButton } from "../../../StyledComponents/StyledGeneralComponents";
import { serverAddress } from "../../../utility/serverAdress";
import axios from "axios";

export const LibrarySideMenu: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedSubTopic, setSelectedSubTopic] = useState<string>("");
  const [addSubTopicModal, setAddSubTopicModal] = useState<boolean>(false);

  const user = JSON.parse(sessionStorage.getItem("user") ?? "null");
  const userData = user ? user.role : "";
  const [isAdmin, setIsAdmin] = useState(userData == "teacher");

  const subTopics: ISubTopics[] = useSelector(
    (state: RootState) => state.subTopic.value
  );
  const currentMainSub: string = useSelector(
    (state: RootState) => state.mainSub.currentMainSub
  );
  const onClose = () => {
    setAddSubTopicModal(false);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLElement>,
    subTopicId: string
  ) => {
    if (
      (e.target as HTMLElement).parentElement?.tagName.toLowerCase() ===
      "button"
    ) {
      handleDeleteButton(subTopicId);
    } else {
      setSelectedSubTopic(subTopicId);
    }
  };
  const handleDeleteButton = (deletedSubTopic: string) => {
    const mainSubConfirm = prompt(
      "Please enter 'delate' to confirm delate:",
      ""
    );
    if (mainSubConfirm === "delate") {
      delateSubTopic(deletedSubTopic);
    } else {
      alert("not deleted");
    }
  };
  const delateSubTopic = async (deletedSubTopic: string) => {
    if (user)
      try {
        const updatedSubTopicList = await axios.delete(
          serverAddress + "/subTopics",
          {
            data: {
              id: deletedSubTopic,
            },
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const subTopicData = updatedSubTopicList.data.data;
        dispatch(updatedSubTopic(subTopicData));
        dispatch(setSubTopic(currentMainSub));
      } catch (error: any) {
        console.log(error);
        alert(error.response.data.message);
        return [];
      }
  };
  dispatch(updatedCurrentSubTopic(selectedSubTopic));
  useEffect(() => {
    if (subTopics.length > 0) {
      setSelectedSubTopic(subTopics[0]._id);
    } else {
      setSelectedSubTopic("");
    }
  }, [subTopics]);
  return (
    <>
      <LibrarySideMenuContainer>
        <LessonsDivHeader>
          <AllLessonDiv>
            <img
              src="./icons/sub-topics-icon.svg"
              alt=""
              style={{ padding: "4.75px" }}
            />
            <GeneralSpan fontSize={18} fontWeight={500}>
              Sub Topics
            </GeneralSpan>
          </AllLessonDiv>
          {isAdmin && (
            <AddButton
              style={{ alignSelf: "flex-end" }}
              onClick={() => setAddSubTopicModal(true)}
            />
          )}
        </LessonsDivHeader>
        <MainSubList>
          {subTopics.map((topic) => (
            <LessonsDivOption
              key={topic._id}
              onClick={(e) => handleClick(e, topic._id)}
              isOn={selectedSubTopic === topic._id}
            >
              {topic.title}
              <RemoveButton isVisible={isAdmin} onClick={() => {}}>
                <img src="./icons/delete-icon-x.svg" alt="" />
              </RemoveButton>
            </LessonsDivOption>
          ))}
        </MainSubList>
      </LibrarySideMenuContainer>
      <AddSubTopicModalBox isShown={addSubTopicModal} onClose={onClose} />
    </>
  );
};
export default LibrarySideMenu;
