import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { text } from "stream/consumers";
import { updatedMainSub } from "../../store/Slicers/mainSub";
import { RootState, serverAddress } from "../../store/store";
import {
  ModalBoxContent,
  ModalOverLay,
  StyledDurationButtons,
  StyledAddButton,
} from "../../StyledComponents/AddDataModalBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GeneralSpan } from "../../StyledComponents/StyledLibrary";
import { StyledInput } from "../../StyledComponents/StyledSignInComponents";
import { IMainSub } from "../../Types/interface/dataInterfaces";

interface IModalBox {
  isShown: boolean;
  onClose: () => void;
}

interface IMainTopicData {
  title: string;
  duration: number;
}

const AddMainTopicModalBox: React.FC<IModalBox> = (props: IModalBox) => {
  const dispatch = useDispatch();
  const isFirstSub: boolean = true;
  const [date, setDate] = useState(new Date());
  const [durationCount, setDurationCount] = useState<number>(1);
  const [newTopicTitle, setNewTopicTitle] = useState<string>("");
  const increaseDay = () => setDurationCount(durationCount + 1);
  const decreaseDay = () => {
    if (durationCount !== 1) {
      setDurationCount(durationCount - 1);
    }
  };
  const inputTextChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTopicTitle(e.target.value);
  const handleClose = () => {
    setDurationCount(1);
    props.onClose();
  };

  const handleAddTopic = (newMainTopic: IMainTopicData) => {
    if (!newTopicTitle) {
      alert("Please type main topic title.");
    } else {
      addingMainSub();
      setNewTopicTitle("");
      setDurationCount(1);
      handleClose();
    }
  };
  const addingMainSub = async () => {
    try {
      const updatedMainSubList = await axios.post(serverAddress + "/mainSub", {
        title: newTopicTitle,
        numOfDays: durationCount,
        startDate: date.getTime(),
      });
      console.log("updated:", updatedMainSubList.data.data);
      dispatch(updatedMainSub(updatedMainSubList.data.data));
    } catch (error: any) {
      console.log(error);
      alert(error.response.data.message);
      return [];
    }
  };

  return (
    <>
      {props.isShown && (
        <ModalOverLay onClick={handleClose}>
          <ModalBoxContent
            width={40}
            height={35}
            onClick={(e) => e.stopPropagation()}
          >
            <GeneralSpan fontSize={18} fontWeight={600}>
              Add Main Topic
            </GeneralSpan>
            <StyledInput
              type={"email"}
              placeholder={"Topic title"}
              onChange={(e) => inputTextChanged(e)}
            />
            {isFirstSub && (
              <>
                <GeneralSpan fontSize={18} fontWeight={600}>
                  Start Date
                </GeneralSpan>
                <DatePicker
                  selected={date}
                  className="datePicker"
                  onChange={(date) => {
                    date && setDate(date);
                  }}
                />
              </>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <StyledDurationButtons onClick={increaseDay}>
                <GeneralSpan fontSize={18} fontWeight={600}>
                  +
                </GeneralSpan>
              </StyledDurationButtons>
              <GeneralSpan fontSize={30} fontWeight={600} style={{ width: "" }}>
                {durationCount} Days
              </GeneralSpan>
              <StyledDurationButtons onClick={decreaseDay}>
                <GeneralSpan fontSize={18} fontWeight={600}>
                  -
                </GeneralSpan>
              </StyledDurationButtons>
            </div>
            <StyledAddButton
              onClick={() => {
                handleAddTopic({
                  title: newTopicTitle,
                  duration: durationCount,
                });
              }}
            >
              Add Topic
            </StyledAddButton>
          </ModalBoxContent>
        </ModalOverLay>
      )}
    </>
  );
};

export default AddMainTopicModalBox;
