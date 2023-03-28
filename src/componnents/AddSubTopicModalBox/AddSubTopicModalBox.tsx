import React, { ChangeEvent, useEffect, useState } from "react";
import {
  ModalBoxContent,
  ModalOverLay,
  StyledDurationButtons,
  StyledAddButton,
} from "../../StyledComponents/AddDataModalBox";
import {
  FilterButton,
  FiltersList,
  GeneralSpan,
} from "../../StyledComponents/StyledLibrary";
import { StyledInput } from "../../StyledComponents/StyledSignInComponents";
import { AddSubTopicButton } from "../../StyledComponents/StyledSubTopicModal";

interface IModalBox {
  isShown: boolean;
  onClose: () => void;
}

interface ISubTopicData {
  title: string;
  materials: IStudyMaterial[];
}

interface IStudyMaterial {
  title: string;
  link: string;
}

const AddSubTopicModalBox: React.FC<IModalBox> = (props: IModalBox) => {
  const [newSubTopicTitle, setNewSubTopicTitle] = useState<string>("");
  const [materialStudyType, setMaterialStudyType] = useState("videos");
  const studyMaterials: IStudyMaterial[] = [{ title: "", link: "" }];
  const [studyMaterialsState, setStudyMaterialsState] =
    useState(studyMaterials);

  // useEffect(() => {
  //     setStudyMaterialsState(studyMaterials);
  // }, [studyMaterials])
  const handleAddTopic = (newSubTopic: ISubTopicData) => {
    if (!newSubTopic) {
      alert("Please type main topic title.");
    } else {
      newSubTopic;
      handleClose();
    }
  };

  const addAnotherSubTopic = () => {
    // studyMaterials.push({ title: '', link: '' });
    // setStudyMaterialsState(studyMaterials);
  };

  const handleClose = () => {
    props.onClose();
  };

  return (
    <>
      {props.isShown && (
        <ModalOverLay onClick={handleClose}>
          <ModalBoxContent
            width={40}
            height={70}
            onClick={(e) => e.stopPropagation()}
          >
            <GeneralSpan fontSize={18} fontWeight={600}>
              Add SubTopic
            </GeneralSpan>
            <StyledInput placeholder="SubTopic name" />
            <GeneralSpan fontSize={18} fontWeight={600}>
              Add Study Material
            </GeneralSpan>
            <AddSubTopicButton onClick={addAnotherSubTopic}>
              <img src="./icons/green-plus-icon.svg" alt="" />
            </AddSubTopicButton>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "scroll",
                gap: "10px",
                minHeight: "100px",
                maxHeight: "300px",
              }}
            >
              {studyMaterialsState.map((studyMaterial) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "10px",
                  }}
                >
                  <StyledInput placeholder="URL" style={{ width: "70%" }} />
                  <FilterButton
                    isSelected={materialStudyType == "videos"}
                    onClick={() => {
                      setMaterialStudyType("videos");
                    }}
                  >
                    video
                  </FilterButton>
                  <FilterButton
                    isSelected={materialStudyType == "links"}
                    onClick={() => {
                      setMaterialStudyType("links");
                    }}
                  >
                    link
                  </FilterButton>
                </div>
              ))}
            </div>
            <StyledAddButton style={{ marginTop: "10px" }}>
              Add SubTopic
            </StyledAddButton>
          </ModalBoxContent>
        </ModalOverLay>
      )}
    </>
  );
};

export default AddSubTopicModalBox;
