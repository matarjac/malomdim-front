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
import { ContentTypes } from "../../Types/enum/contentCube";

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
  type: ContentTypes;
}

const AddSubTopicModalBox: React.FC<IModalBox> = (props: IModalBox) => {
  const [newSubTopicTitle, setNewSubTopicTitle] = useState<string>("");
  const [studyMaterialsState, setStudyMaterialsState] = useState([
    { title: "", link: "", type: ContentTypes.Videos },
  ]);

  const addAnotherMaterial = async () => {
    setStudyMaterialsState([
      ...studyMaterialsState,
      { title: "", link: "", type: ContentTypes.Videos },
    ]);
  };

  const updateMaterialType = (index: number, newValue: ContentTypes) => {
    setStudyMaterialsState((prevArray) => {
      const newArray = [...prevArray];
      newArray[index].type = newValue;
      return newArray;
    });
  };

  const updateMaterialTitle = (index: number, newValue: string) => {
    setStudyMaterialsState((prevArray) => {
      const newArray = [...prevArray];
      newArray[index].title = newValue;
      return newArray;
    });
  };

  const updateMaterialLink = (index: number, newValue: string) => {
    setStudyMaterialsState((prevArray) => {
      const newArray = [...prevArray];
      newArray[index].link = newValue;
      return newArray;
    });
  };

  const handleAddSubTopic = (subTopicData: ISubTopicData) => {
    let isTitleFilled = false;
    let isInputEmpty = false;

    if (!subTopicData.title) {
      alert("Please type sub topic name.");
    } else {
      isTitleFilled = true;
    }

    subTopicData.materials.forEach((material) => {
      const values = Object.values(material);
      if (values.some((val) => val == "")) {
        isInputEmpty = true;
      }
    });

    isInputEmpty && alert("please fill all input filleds.");

    if (isTitleFilled && !isInputEmpty) {
      handleData(subTopicData);
      handleClose();
    }

    // for (let i=0;i<subTopicData.materials.length;i++){
    //     if (!(material.link && material.title && material.type)) {
    //         isInputEmpty = true;
    // }

    // subTopicData.materials.forEach(material => {
    //     if (!(material.link && material.title && material.type)) {
    //         isInputEmpty = true;
    //     } else {
    //         isAllFilled = true;
    //     }
    // });
  };

  const handleData = (subTopicData: ISubTopicData) => {
    console.log(subTopicData);
    return subTopicData;
  };

  const handleClose = () => {
    setStudyMaterialsState([
      { title: "", link: "", type: ContentTypes.Videos },
    ]);
    props.onClose();
  };

  return (
    <>
      {props.isShown && (
        <ModalOverLay onClick={handleClose}>
          <ModalBoxContent
            width={50}
            height={75}
            onClick={(e) => e.stopPropagation()}
          >
            <GeneralSpan fontSize={18} fontWeight={600}>
              Add SubTopic
            </GeneralSpan>
            <StyledInput
              placeholder="SubTopic name"
              onChange={(e) => setNewSubTopicTitle(e.target.value)}
            />
            <GeneralSpan fontSize={18} fontWeight={600}>
              Add Study Material
            </GeneralSpan>
            <AddSubTopicButton onClick={addAnotherMaterial}>
              <img src="./icons/green-plus-icon.svg" alt="" />
            </AddSubTopicButton>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "scroll",
                gap: "10px",
                height: "250px",
              }}
            >
              {studyMaterialsState.map((studyMaterial, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "10px",
                  }}
                >
                  <StyledInput
                    placeholder="Title"
                    style={{ width: "50%" }}
                    onChange={(e) => {
                      updateMaterialTitle(index, e.target.value);
                    }}
                  />
                  <StyledInput
                    placeholder="URL"
                    style={{ width: "70%" }}
                    onChange={(e) => {
                      updateMaterialLink(index, e.target.value);
                    }}
                  />
                  <FilterButton
                    isSelected={
                      studyMaterialsState[index].type == ContentTypes.Videos
                    }
                    onClick={() => {
                      updateMaterialType(index, ContentTypes.Videos);
                    }}
                  >
                    video
                  </FilterButton>
                  <FilterButton
                    isSelected={
                      studyMaterialsState[index].type == ContentTypes.Links
                    }
                    onClick={() => {
                      updateMaterialType(index, ContentTypes.Links);
                    }}
                  >
                    link
                  </FilterButton>
                </div>
              ))}
            </div>
            <StyledAddButton
              onClick={() => {
                handleAddSubTopic({
                  title: newSubTopicTitle,
                  materials: studyMaterialsState,
                });
              }}
              style={{ marginTop: "10px" }}
            >
              Add SubTopic
            </StyledAddButton>
          </ModalBoxContent>
        </ModalOverLay>
      )}
    </>
  );
};

export default AddSubTopicModalBox;
