import React, { useEffect, useState } from "react";
import {
  AddButton,
  LessonsDivOption,
  MainSubList,
} from "../../../StyledComponents/sideBarStyled";
import {
  GeneralSpan,
  LibrarySideMenuContainer,
  SubTopicButton,
  SubTopicsListContainer,
} from "../../../StyledComponents/StyledLibrary";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cleanMaterial, setMaterial } from "../../../store/Slicers/material";
import {
  setSubTopic,
  updatedCurrentSubTopic,
} from "../../../store/Slicers/subTopic";
import { RootState } from "../../../store/store";
import { ISubTopics } from "../../../Types/interface/dataInterfaces";
import AddSubTopicModalBox from "../../AddSubTopicModalBox/AddSubTopicModalBox";
import { RemoveButton } from "../../../StyledComponents/StyledGeneralComponents";

export const LibrarySideMenu: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedSubTopic, setSelectedSubTopic] = useState<string>("");
  const [addSubTopicModal, setAddSubTopicModal] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const subTopics: ISubTopics[] = useSelector(
    (state: RootState) => state.subTopic.value
  );
  const onClose = () => {
    setAddSubTopicModal(false);
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
        <div
          style={{
            display: "flex",
            padding: "10px, 8px",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <img
            src="./icons/sub-topics-icon.svg"
            alt=""
            style={{ padding: "4.75px" }}
          />
          <GeneralSpan fontSize={18} fontWeight={500}>
            Sub Topics
          </GeneralSpan>
          <AddButton
            style={{ alignSelf: "flex-end" }}
            onClick={() => setAddSubTopicModal(true)}
          />
        </div>
        <MainSubList>
          {subTopics.map((topic) => (
            <LessonsDivOption
              key={topic._id}
              onClick={() => {
                setSelectedSubTopic(topic._id);
              }}
              isOn={selectedSubTopic === topic._id}
            >
              {topic.title}
              <RemoveButton isVisible={isAdmin} onClick={(e) => {}}>
                -
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
