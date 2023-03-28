import React, { useEffect, useState } from "react";
import { AddButton } from "../../../StyledComponents/sideBarStyled";
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

export const LibrarySideMenu: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedSubTopic, setSelectedSubTopic] = useState<string>("");
  const subTopics: ISubTopics[] = useSelector(
    (state: RootState) => state.subTopic.value
  );
  dispatch(setMaterial(selectedSubTopic));
  dispatch(updatedCurrentSubTopic(selectedSubTopic));
  useEffect(() => {
    if (subTopics.length > 0) {
      setSelectedSubTopic(subTopics[0]._id);
    } else {
      setSelectedSubTopic("");
    }
  }, [subTopics]);
  return (
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
          onClick={() => console.log("add")}
        />
      </div>
      <SubTopicsListContainer>
        {subTopics.map((topic) => (
          <li key={topic._id} style={{ all: "unset" }}>
            <SubTopicButton
              onClick={() => {
                setSelectedSubTopic(topic._id);
              }}
              isSelected={selectedSubTopic === topic._id}
            >
              {topic.title}
            </SubTopicButton>
          </li>
        ))}
      </SubTopicsListContainer>
    </LibrarySideMenuContainer>
  );
};
export default LibrarySideMenu;
