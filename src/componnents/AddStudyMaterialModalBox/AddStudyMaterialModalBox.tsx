import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import material, {
  setMaterial,
  updatedMaterial,
} from "../../store/Slicers/material";
import { ThreeDots } from "react-loader-spinner";
import { updatedSubTopic } from "../../store/Slicers/subTopic";
import { RootState } from "../../store/store";
import {
  ModalBoxContent,
  ModalOverLay,
  StyledDurationButtons,
  StyledAddButton,
  LoadingDiv,
} from "../../StyledComponents/AddDataModalBox";
import {
  FilterButton,
  FiltersList,
  GeneralSpan,
} from "../../StyledComponents/StyledLibrary";
import { StyledInput } from "../../StyledComponents/StyledSignInComponents";
import {
  AddSubTopicButton,
  MaterialAddingList,
} from "../../StyledComponents/StyledSubTopicModal";
import { ContentTypes } from "../../Types/enum/contentCube";
import { serverAddress } from "../../utility/serverAdress";

interface IAddMaterialModalBox {
  isShown: boolean;
  subTopicId: string;
  onClose: () => void;
}

interface IStudyMaterial {
  title: string;
  link: string;
  type: ContentTypes;
}

const AddStudyMaterialModalBox: React.FC<IAddMaterialModalBox> = (
  props: IAddMaterialModalBox
) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [studyMaterialsState, setStudyMaterialsState] = useState([
    { title: "", link: "", type: ContentTypes.Videos },
  ]);
  const addAnotherMaterial = () => {
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
  const handleAddStudyMaterials = (studyMaterials: IStudyMaterial[]) => {
    let isInputEmpty = false;

    studyMaterials.forEach((material) => {
      const values = Object.values(material);
      if (values.some((val) => val == "")) {
        isInputEmpty = true;
      }
    });

    isInputEmpty && alert("please fill all input filleds.");
    if (!isInputEmpty) {
      handleData(studyMaterials);
    }
  };

  const handleData = async (studyMaterials: IStudyMaterial[]) => {
    try {
      setLoading(true);
      const materialList = studyMaterials.map((material) => {
        return {
          category: material.type,
          body: material.link,
          title: material.title,
          idSubTopic: props.subTopicId,
        };
      });
      const updatedMaterialList = await axios.post(
        serverAddress + "/materials/many",
        materialList
      );
      //update
      dispatch(updatedMaterial(updatedMaterialList.data.data));
    } catch (error: any) {
      console.log(error.message);
    }
    setLoading(false);
    handleClose();
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
              Add Study materials to
            </GeneralSpan>

            <AddSubTopicButton onClick={addAnotherMaterial}>
              <img src="./icons/green-plus-icon.svg" alt="" />
            </AddSubTopicButton>
            <MaterialAddingList>
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
            </MaterialAddingList>
            <StyledAddButton
              onClick={() => handleAddStudyMaterials(studyMaterialsState)}
              style={{ marginTop: "10px", fontSize: "16px" }}
            >
              Add Study Materials
            </StyledAddButton>
            {loading && (
              <LoadingDiv>
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#f0f0f0"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  visible={true}
                />
              </LoadingDiv>
            )}
          </ModalBoxContent>
        </ModalOverLay>
      )}
    </>
  );
};

export default AddStudyMaterialModalBox;
