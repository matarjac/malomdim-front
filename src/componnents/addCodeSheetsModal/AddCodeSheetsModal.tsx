import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFiled from "../inputFiled/inputFiled";
import "./AddCodeSheetsModal.css";
import "../../../src/pages/SingInPage/SingInPage.css";

interface IAddCodeSheetProps {
  setShowCodeSheetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCodeSheetsModal: React.FC<IAddCodeSheetProps> = ({
  setShowCodeSheetModal,
}) => {
  const navigation: any = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");

  // const handSaveSheet = async (e: any) => {
  //   e.preventDefault();

  //   const credentials: any = {
  //     Titel: "",
  //     Description: "",
  //     Content: "",
  //   };
  return (
    <div className="modal-overlay">
      <div className="close-modal-box">
        <button
          className="close-modal"
          onClick={() => setShowCodeSheetModal(false)}
        >
          <img
            className="close-modal-img"
            src="./icons/CloseModal.svg"
            alt="close codal icon"
          />
        </button>
        {/* <form className="add-rest-form" onSubmit={handSaveSheet}> */}
        <form className="add-rest-form">
          <div className="title-modal">Add Code Sheets From</div>
          <div className="inputField">
            <InputFiled
              label={"Title"}
              onChange={(value: any) => setTitle(value)}
            />
            <InputFiled
              label={"Description"}
              onChange={(value: any) => setDescription(value)}
            />
            <div className="content-input-box">
              {/* <InputFiled
              label={"Content"}
              onChange={(value: any) => setContent(value)}
            /> */}
              <textarea
                name="Content"
                className="content-input-test"
                placeholder="Content"
                onChange={(value: any) => setContent(value)}
              />
            </div>
          </div>

          <div>
            <div className="title-modal">Rating </div>
            <input type="radio" id="star1" name="rating" value="1" />
            <label htmlFor="star1"> 1 star </label>
            <input type="radio" id="star2" name="rating" value="2" />
            <label htmlFor="star2"> 2 stars </label>
            <label htmlFor="star5"> 5 stars </label>
          </div>
          <div className="buttons-form">
            <button
              className="btu-singel"
              onClick={() => setShowCodeSheetModal(false)}
            >
              Cancel
            </button>
            <button className="btu-singel" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCodeSheetsModal;
