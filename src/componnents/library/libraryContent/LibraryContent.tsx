import React from "react";
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
      <ContentCube
        link={"https://moveogroup.monday.com/boards/4183474202"}
        type={ContentTypes.Videos}
        title={"yes"}
      />
    </LibraryContentContainer>
  );
};

export default LibraryContent;
