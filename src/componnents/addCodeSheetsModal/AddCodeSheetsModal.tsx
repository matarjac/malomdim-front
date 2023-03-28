import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFiled from "../inputFiled/inputFiled";
import "./AddCodeSheetsModal.css";
import "../../pages/signInPage/SignInPage.css";
import {
  FilterButton,
  FiltersList,
} from "../../StyledComponents/StyledLibrary";
import { updatedMaterial } from "../../store/Slicers/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ISubTopics } from "../../Types/interface/dataInterfaces";

interface IAddCodeSheetProps {
  setShowCodeSheetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCodeSheetsModal: React.FC<IAddCodeSheetProps> = ({
  setShowCodeSheetModal,
}) => {
  const dispatch = useDispatch;
  const navigation: any = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [materialType, setMaterialType] = useState("text");

  const handleMaterialTypeChange = (newMaterialType: string) => {
    setMaterialType(newMaterialType);
    setContent("");
  };

  // const subTopics: ISubTopics[] = useSelector(
  //   (state: RootState) => state.subTopic.corent
  // );

  // console.log(subTopics);
  
  
  const AddUserMaterialToDataBase = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      content,
      materialType,
    };
    console.log(formData);
  //   try {
  //     const updatedRestaurantsList = await axios.post(
  //       "https://server-epicure.onrender.com/restaurants/add",
  //       {
  //         data: formData,
  //       }
  //     );
  //     dispatch(updatedMaterial(data));
  //     props.onSubmit();
  //   } catch (error: any) {
  //     console.log(error);
  //     alert(error.response.data.message);
  //     return [];
  //   }
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
          <form
            className="code-sheets-form"
            onSubmit={AddUserMaterialToDataBase}
          >
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
      </div>
    </div>
  );
};

export default AddCodeSheetsModal;
