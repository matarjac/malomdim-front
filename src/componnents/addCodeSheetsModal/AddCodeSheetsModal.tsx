import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFiled from "../inputFiled/inputFiled";
import "./AddCodeSheetsModal.css";
import "../../../src/pages/SingInPage/SingInPage.css";
import MaterialsFilter from "../library/libraryContent/materialsFilter/MaterialsFilter";

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
        <form className="add-code-sheets-form">
          <div className="title-modal">Add Code Sheets.</div>

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
              <textarea
                name="Content"
                className="content-input-text"
                placeholder="Content"
                onChange={(value: any) => setContent(value)}
              />
            </div>
          </div>
          <button className="btu-save" type="submit">
            Save
          </button>

          <button
            className="btu-cancel"
            onClick={() => setShowCodeSheetModal(false)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCodeSheetsModal;
