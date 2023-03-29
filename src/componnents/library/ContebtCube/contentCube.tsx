import React, { useState } from "react";
import {
  Cube,
  CubeDescription,
  MainCubePart,
} from "../../../StyledComponents/content-cube";
import { RemoveButton } from "../../../StyledComponents/StyledGeneralComponents";
import { ContentTypes } from "../../../Types/enum/contentCube";
import CodeBlock from "../../codeBlock/CodeBlock";

interface IContentCube {
  body: string;
  type: string;
  title: string;
  description?: string;
  codeType?: string;
}

export const ContentCube: React.FC<IContentCube> = (props) => {
  const [isCodeOpen, setIsCodeOpen] = useState<boolean>(false);
  const iconSrc: string = "/icons/contantTypes/" + props.type + ".svg";

  const handleClick = (e: any) => {
    if (props.type === ContentTypes.CodeSheets) {
      setIsCodeOpen(true);
    } else if (props.body) {
      window.open(props.body, "_blank");
    }
  };

  const handleDeleteButton = (e: any) => {
    e.stopPropagation();
    alert('deleted');
  }


  return (
    <Cube onClick={(e: any) => handleClick(e)}>
      <MainCubePart>
        <img src={iconSrc} alt={props.type} />
      </MainCubePart>
      <CubeDescription>{props.title}</CubeDescription>
      {isCodeOpen && <CodeBlock code={props.body} codeType={props.codeType} />}
      <RemoveButton onClick={(e) => { handleDeleteButton(e) }}>-</RemoveButton>
    </Cube>
  );
};

export default ContentCube;

