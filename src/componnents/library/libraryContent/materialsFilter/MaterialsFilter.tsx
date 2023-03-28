import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMaterial } from "../../../../store/Slicers/material";
import { RootState } from "../../../../store/store";
import {
  AddCodeSheetButton,
  FilterButton,
  FiltersContainer,
  FiltersList,
  GeneralSpan,
} from "../../../../StyledComponents/StyledLibrary";
import { ContentTypes } from "../../../../Types/enum/contentCube";
import AddCodeSheetsModal from "../../../addCodeSheetsModal/AddCodeSheetsModal";

export const MaterialsFilter: React.FC = () => {
  const dispatch = useDispatch();
  const subTopicId: string = useSelector(
    (state: RootState) => state.subTopic.currentSubTopic
  );
  const [materialType, setMaterialType] = useState("all");
  const handleAddButtonClick = () => {
    setShowCodeSheetModal(true);
  };
  const [showCodeSheetModal, setShowCodeSheetModal] = useState(false);
  useEffect(() => {
    console.log(materialType);
    dispatch(
      setMaterial({
        id: subTopicId,
        materialType,
      })
    );
  }, [materialType, subTopicId]);
  return (
    <FiltersContainer>
      {materialType == "code sheets" && (
        <AddCodeSheetButton onClick={handleAddButtonClick}>
          <img
            style={{ scale: "80%" }}
            src="./icons/addCodeSheet-icon.svg"
            alt=""
          />{" "}
          Code sheet
        </AddCodeSheetButton>
      )}

      <FiltersList>
        <FilterButton
          isSelected={materialType == "all"}
          onClick={() => {
            setMaterialType("all");
          }}
        >
          All
        </FilterButton>
        <FilterButton
          isSelected={materialType == ContentTypes.Videos}
          onClick={() => {
            setMaterialType(ContentTypes.Videos);
          }}
        >
          Videos
        </FilterButton>
        <FilterButton
          isSelected={materialType == ContentTypes.Links}
          onClick={() => {
            setMaterialType(ContentTypes.Links);
          }}
        >
          Links
        </FilterButton>
        <FilterButton
          isSelected={materialType == ContentTypes.CodeSheets}
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
    </FiltersContainer>
  );
};

export default MaterialsFilter;
