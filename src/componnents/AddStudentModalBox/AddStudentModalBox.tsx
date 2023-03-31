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
  StudentEmailInput,
} from "../../StyledComponents/StyledSubTopicModal";
import { ContentTypes } from "../../Types/enum/contentCube";
import { serverAddress } from "../../utility/serverAdress";

interface IAddMaterialModalBox {
  isShown: boolean;
  onClose: () => void;
}

interface IStudentEmailList {
  email: string;
}

const AddStudentModalBox: React.FC<IAddMaterialModalBox> = (
  props: IAddMaterialModalBox
) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [studentList, setStudentList] = useState([{ email: "" }]);
  const addAnotherStudent = () => {
    setStudentList([...studentList, { email: "" }]);
  };
  const updateStudentEmail = (index: number, newValue: string) => {
    setStudentList((prevArray) => {
      const newArray = [...prevArray];
      newArray[index].email = newValue;
      return newArray;
    });
  };
  const handleAddStudentEmail = (studentEmails: IStudentEmailList[]) => {
    let isInputEmpty = false;
    studentEmails.forEach((material) => {
      const values = Object.values(material);
      if (values.some((val) => val == "")) {
        isInputEmpty = true;
      }
    });
    isInputEmpty
      ? alert("please fill all input filleds.")
      : console.log(studentEmails);
    handleClose();
  };

  const handleData = async (studyMaterials: IStudentEmailList[]) => {
    // try {
    //   setLoading(true);
    //   const materialList = studyMaterials.map((material) => {
    //     return {
    //       category: material.type,
    //       body: material.link,
    //       title: material.title,
    //       idSubTopic: props.subTopicId,
    //     };
    //   });
    //   const updatedMaterialList = await axios.post(
    //     serverAddress + "/materials/many",
    //     materialList
    //   );
    //   //update
    //   dispatch(updatedMaterial(updatedMaterialList.data.data));
    // } catch (error: any) {
    //   console.log(error.message);
    // }
    // setLoading(false);
    // handleClose();
  };
  const handleClose = () => {
    setStudentList([{ email: "" }]);
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
              Update Course Student
            </GeneralSpan>

            <AddSubTopicButton onClick={addAnotherStudent}>
              <img src="./icons/green-plus-icon.svg" alt="" />
            </AddSubTopicButton>
            <MaterialAddingList>
              {studentList.map((studyMaterial, index) => (
                <StudentEmailInput key={index}>
                  <StyledInput
                    type="email"
                    placeholder="Email"
                    style={{ width: "80%" }}
                    onChange={(e) => {
                      updateStudentEmail(index, e.target.value);
                    }}
                  />
                </StudentEmailInput>
              ))}
            </MaterialAddingList>
            <StyledAddButton
              onClick={() => handleAddStudentEmail(studentList)}
              style={{ marginTop: "10px", fontSize: "16px" }}
            >
              Add Students email
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

export default AddStudentModalBox;
