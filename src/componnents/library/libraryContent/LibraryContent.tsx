import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  IMaterials,
  ISubTopics,
} from "../../../Types/interface/dataInterfaces";
import ContentCube from "../ContebtCube/contentCube";

export const LibraryContent: React.FC = () => {
  const materials: IMaterials[] | undefined = useSelector(
    (state: RootState) => state.material.value
  );
  const subTopics: ISubTopics[] = useSelector(
    (state: RootState) => state.subTopic.value
  );
  return (
    <LibraryContentContainer>
      <MaterialsFilter />
      <div
        style={{
          width: "100%",
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          textAlign: "center",
          gridGap: "18px",
        }}
      >
        {materials &&
          materials.map((material) => (
            <ContentCube
              key={material._id}
              body={material.body}
              description={material.description}
              type={material.category}
              title={material.title}
              codeType={material.codeType}
            />
          ))}
      </div>
    </LibraryContentContainer>
  );
};

export default LibraryContent;
