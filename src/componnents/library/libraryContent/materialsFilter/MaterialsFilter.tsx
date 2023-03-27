import React, { useState } from "react";
import {
  AddCodeSheetButton,
  FilterButton,
  FiltersContainer,
  FiltersList,
  GeneralSpan,
} from "../../../../StyledComponents/StyledLibrary";
import AddCodeSheetsModal from "../../../addCodeSheetsModal/AddCodeSheetsModal";

export const MaterialsFilter: React.FC = () => {
    const [materialType, setMaterialType] = useState("all");
    
    const handleAddButtonClick = () => {
      setShowCodeSheetModal(true);
    };
    const [showCodeSheetModal, setShowCodeSheetModal] = useState(false);
  
  
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
            isSelected={materialType == "videos"}
            onClick={() => {
              setMaterialType("videos");
            }}
          >
            Videos
          </FilterButton>
          <FilterButton
            isSelected={materialType == "links"}
            onClick={() => {
              setMaterialType("links");
            }}
          >
            Links
          </FilterButton>
          <FilterButton
            isSelected={materialType == "code sheets"}
            onClick={() => {
              setMaterialType("code sheets");
            }}
          >
            Code Sheets
          </FilterButton>
        </FiltersList>
        {showCodeSheetModal && <AddCodeSheetsModal setShowCodeSheetModal={setShowCodeSheetModal}/>}
      </FiltersContainer>
    );
  };

  export default MaterialsFilter;