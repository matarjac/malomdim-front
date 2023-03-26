import React, { useState, useEffect } from "react";
import {
  Cube,
  CubeDescription,
  MainCubePart,
} from "../../../StyledComponents/content-cube";
import { ContentTypes } from "../../../Types/enum/contentCube";
interface IContentCube {
  link: string;
  type: ContentTypes;
  title: string;
}
export const ContentCube: React.FC<IContentCube> = (props) => {
  const [isCodeOpen, setIsCodeOpen] = useState<boolean>(false);
  const iconSrc: string =
    props.type === ContentTypes.Links
      ? "/icons/contantTypes/Link.png"
      : "/icons/contantTypes/" + props.type + ".svg";

  const handleClick = () => {
    if (props.type === ContentTypes.CodeSheets) {
      setIsCodeOpen(true);
    } else if (props.link) {
      window.open(props.link, "_blank");
    }
  };

  return (
    <Cube onClick={handleClick}>
      <MainCubePart>
        <img src={iconSrc} alt={props.type} />
      </MainCubePart>
      <CubeDescription>{props.title}</CubeDescription>
      {isCodeOpen && <span>yes</span>}
    </Cube>
  );
};

export default ContentCube;
