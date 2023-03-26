import React from "react";
import MaterialsFilter from "./materialsFilter/MaterialsFilter";
import {
  Cube,
  CubeDescription,
  MainCubePart,
} from "../../../StyledComponents/content-cube";
import {
  GeneralSpan,
  LibraryContentContainer,
} from "../../../StyledComponents/StyledLibrary";
import { ContentTypes } from "../../../Types/enum/contentCube";
import ContentCube from "../ContebtCube/contentCube";

export const LibraryContent: React.FC = () => {
  return (
    <LibraryContentContainer>
      <MaterialsFilter />
      <ContentCube
        link={"https://moveogroup.monday.com/boards/4183474202"}
        type={ContentTypes.Videos}
        title={"yes"}
      />
    </LibraryContentContainer>
  );
};

export default LibraryContent;
