import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFiled from "../inputFiled/inputFiled";
import "./AddCodeSheetsModal.css";
import "../../pages/signInPage/SignInPage.css";
import {
  FilterButton,
  FiltersList,
} from "../../StyledComponents/StyledLibrary";

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
  const [materialType, setMaterialType] = useState("text");

  const handleMaterialTypeChange = (newMaterialType: string) => {
    setMaterialType(newMaterialType);
    setContent("");
  };

  return (
    <div className="modal-overlay">
      {/* <div className="close-modal-box"> */}
        <div className="add-code-sheets-form">
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
          <div className="title-modal">Add Code Sheets.</div>
          <div className="nav-bar-modal">
            <FiltersList>
              <FilterButton
                isSelected={materialType === "text"}
                onClick={() => handleMaterialTypeChange("text")}
                style={{ width: "100px" }}
              >
                Text
              </FilterButton>
              <FilterButton
                isSelected={materialType === "link"}
                onClick={() => handleMaterialTypeChange("link")}
                style={{ width: "100px" }}
              >
                Link
              </FilterButton>
              <FilterButton
                isSelected={materialType === "code"}
                onClick={() => handleMaterialTypeChange("code")}
                style={{ width: "100px" }}
              >
                Code
              </FilterButton>
            </FiltersList>
          </div>
          <form className="code-sheets-form">
            <div className="inputField">
              <InputFiled
                label={"Title"}
                onChange={(value: any) => setTitle(value)}
              />
              <InputFiled
                label={"Description"}
                onChange={(value: any) => setDescription(value)}
              />
              {materialType === "text" && (
                <textarea
                  name="Content"
                  className="content-input-text"
                  placeholder="Text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              )}
              {materialType === "code" && (
                <div className="code-content-container">
                  <div className="title-modal">Select Language.</div>
                  <select className="language-select">
                    <option value="">Select Language</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="typescript">TypeScript</option>
                    <option value="css">Css</option>
                    <option value="json">Json</option>
                  </select>
                  <textarea
                    name="Content"
                    className="content-input-text"
                    placeholder="Code"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              )}
              {materialType === "link" && (
                <InputFiled
                  label={"Link"}
                  onChange={(value: any) => setDescription(value)}
                />
              )}
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
      {/* </div> */}
    </div>
  );
};

export default AddCodeSheetsModal;
