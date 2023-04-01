import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFiled from "../inputFiled/inputFiled";
import "./AddCodeSheetsModal.css";
import "../../pages/signInPage/SignInPage.css";
import {
  FilterButton,
  FiltersList,
} from "../../StyledComponents/StyledLibrary";

import { setMaterial, updatedMaterial } from "../../store/Slicers/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IMaterials, ISubTopics } from "../../Types/interface/dataInterfaces";
import axios from "axios";
import { serverAddress } from "../../utility/serverAdress";

interface IAddCodeSheetProps {
  setShowCodeSheetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCodeSheetsModal: React.FC<IAddCodeSheetProps> = ({
  setShowCodeSheetModal,
}) => {
  const dispatch = useDispatch();
  const navigation: any = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [category, setCategory] = useState("text");
  const [codeType, setCodeType] = useState("");

  const handleCategoryType = (newCategoryType: string) => {
    setCategory(newCategoryType);
    // setBody("");
  };
  const subTopics: string = useSelector(
    (state: RootState) => state.subTopic.currentSubTopic
  );
  const getUserMaterialData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      idSubTopic: subTopics,
      title,
      description,
      body,
      category,
      codeType,
    };

    try {
      const AddUserMaterialToDataBase = await axios.post(
        serverAddress + "/materials/",
        formData
      );
      dispatch(updatedMaterial(AddUserMaterialToDataBase.data.data));
      setShowCodeSheetModal(false);
    } catch (error: any) {
      console.log(error);
      alert(error.response.data.message);
      return [];
    }
  };
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
        <div className="add-code-sheets-form">
          <div className="title-modal">Add Code Sheets.</div>
          <div className="nav-bar-modal">
            <FiltersList>
              <FilterButton
                isSelected={category === "text"}
                onClick={() => handleCategoryType("text")}
                style={{ width: "100px" }}
              >
                Text
              </FilterButton>
              <FilterButton
                isSelected={category === "Link"}
                onClick={() => handleCategoryType("Link")}
                style={{ width: "100px" }}
              >
                Link
              </FilterButton>
              <FilterButton
                isSelected={category === "Code"}
                onClick={() => handleCategoryType("Code")}
                style={{ width: "100px" }}
              >
                Code
              </FilterButton>
            </FiltersList>
          </div>
          <form className="code-sheets-form" onSubmit={getUserMaterialData}>
            <div className="inputField">
              <InputFiled
                label={"Title"}
                onChange={(value: any) => setTitle(value)}
              />
              <InputFiled
                label={"Description"}
                onChange={(value: any) => setDescription(value)}
              />
              {category === "text" && (
                <textarea
                  name="Content"
                  className="content-input-text"
                  placeholder="Text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              )}
              {category === "Code" && (
                <div className="code-content-container">
                  <div className="title-modal">Select Language.</div>
                  <select
                    className="language-select"
                    onChange={(e) => setCodeType(e.target.value)}
                  >
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
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </div>
              )}
              {category === "Link" && (
                <InputFiled
                  label={"Link"}
                  onChange={(value: any) => setBody(value)}
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
      </div>
    </div>
  );
};

export default AddCodeSheetsModal;
