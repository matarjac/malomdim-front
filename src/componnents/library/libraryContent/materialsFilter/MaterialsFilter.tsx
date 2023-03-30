import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMaterial } from "../../../../store/Slicers/material";
import { RootState } from "../../../../store/store";
import {
  AddCodeSheetButton,
  FilterButton,
  FiltersContainer,
  FiltersList,
} from "../../../../StyledComponents/StyledLibrary";
import { ContentTypes } from "../../../../Types/enum/contentCube";
import AddCodeSheetsModal from "../../../addCodeSheetsModal/AddCodeSheetsModal";
import AddStudyMaterialModalBox from "../../../AddStudyMaterialModalBox/AddStudyMaterialModalBox";

export const MaterialsFilter: React.FC = () => {
  const dispatch = useDispatch();
  const subTopicId: string = useSelector(
    (state: RootState) => state.subTopic.currentSubTopic
  );
  const materialList = useSelector(
    (state: RootState) => state.material.allMaterial
  );
  const [materialType, setMaterialType] = useState("all");
  const [addStudyMaterialsModal, setAddStudyMaterialsModal] =
    useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const handleAddButtonClick = () => {
    setShowCodeSheetModal(true);
  };
  const [showCodeSheetModal, setShowCodeSheetModal] = useState(false);
  useEffect(() => {
    dispatch(
      setMaterial({
        id: subTopicId,
        materialType,
      })
    );
  }, [materialType, subTopicId, materialList]);
  return (
    <FiltersContainer>
      {materialType === ContentTypes.CodeSheets && (
        <AddCodeSheetButton onClick={handleAddButtonClick}>
          <img
            style={{ scale: "80%" }}
            src="./icons/addCodeSheet-icon.svg"
            alt=""
          />
          Code sheet
        </AddCodeSheetButton>
      )}
      {materialType === "all" && isAdmin && (
        <AddCodeSheetButton onClick={() => setAddStudyMaterialsModal(true)}>
          <img
            style={{ scale: "80%" }}
            src="./icons/addCodeSheet-icon.svg"
            alt=""
          />
          Material Study
        </AddCodeSheetButton>
      )}
      <FiltersList>
        <FilterButton
          isSelected={materialType === "all"}
          onClick={() => {
            setMaterialType("all");
          }}
        >
          All
        </FilterButton>
        <FilterButton
          isSelected={materialType === ContentTypes.Videos}
          onClick={() => {
            setMaterialType(ContentTypes.Videos);
          }}
        >
          Videos
        </FilterButton>
        <FilterButton
          isSelected={materialType === ContentTypes.Links}
          onClick={() => {
            setMaterialType(ContentTypes.Links);
          }}
        >
          Links
        </FilterButton>
        <FilterButton
          isSelected={materialType === ContentTypes.CodeSheets}
          onClick={() => {
            setMaterialType(ContentTypes.CodeSheets);
          }}
        >
          Code Sheets
        </FilterButton>
      </FiltersList>
      {showCodeSheetModal && (
        <AddCodeSheetsModal setShowCodeSheetModal={setShowCodeSheetModal} />
      )}
      <AddStudyMaterialModalBox
        subTopicId={subTopicId}
        isShown={addStudyMaterialsModal}
        onClose={() => setAddStudyMaterialsModal(false)}
      />
    </FiltersContainer>
  );
};

export default MaterialsFilter;
