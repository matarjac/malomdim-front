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
import {
  LessonsDivOption,
  UserName,
} from "../../StyledComponents/sideBarStyled";
import { updatedStudent } from "../../store/Slicers/students";
import { RemoveButton } from "../../StyledComponents/StyledGeneralComponents";

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
  const user = JSON.parse(sessionStorage.getItem("user") ?? "null");
  const students = useSelector((state: RootState) => state.students.allStudent);
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
      : addStudent(studentEmails);
  };

  const addStudent = async (studentAddingList: IStudentEmailList[]) => {
    try {
      setLoading(true);
      const studentResult = await axios.post(
        serverAddress + "/user/student",
        studentAddingList,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      //update
      dispatch(updatedStudent(studentResult.data.data));
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
    }
    setLoading(false);
  };
  const removeStudent = async (student: string) => {
    try {
      setLoading(true);
      const studentResult = await axios.delete(
        serverAddress + "/user/student",
        {
          data: { student: student },
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      //update
      dispatch(updatedStudent(studentResult.data.data));
      setStudentList([{ email: "" }]);
    } catch (error: any) {
      console.log(error.message);
    }
    setLoading(false);
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
              Current Students
            </GeneralSpan>
            <MaterialAddingList>
              {students.map((student, index) => (
                <LessonsDivOption isOn={false} onClick={(e) => {}} key={index}>
                  <UserName>{student}</UserName>
                  <RemoveButton
                    isVisible={true}
                    onClick={() => {
                      removeStudent(student);
                    }}
                  >
                    <img src="./icons/delete-icon-x.svg" alt="" />
                  </RemoveButton>{" "}
                </LessonsDivOption>
              ))}
            </MaterialAddingList>
            <GeneralSpan fontSize={18} fontWeight={600}>
              Update Course Student
            </GeneralSpan>

            <AddSubTopicButton onClick={addAnotherStudent}>
              <img src="./icons/green-plus-icon.svg" alt="" />
            </AddSubTopicButton>
            <MaterialAddingList>
              {studentList.map((student, index) => (
                <StudentEmailInput key={index}>
                  <StyledInput
                    type="email"
                    placeholder="Email"
                    value={student.email}
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
