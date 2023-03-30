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
  setIsModalOpen?: () => void;
}


export const ContentCube: React.FC<IContentCube> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState(false);
  const iconSrc: string = "/icons/contantTypes/" + props.type + ".svg";


  const handleClick = (e: any) => {
    if (props.type === ContentTypes.CodeSheets) {
      setIsModalOpen("code")
    } else if (props.type === ContentTypes.Text) {
      setIsModalOpen("text")
    } else if (props.body) {
      window.open(props.body, "_blank");
    }
  };


  const handleDeleteButton = (e: any) => {
    e.stopPropagation();
    alert('deleted');
  }
  return (
    <>
      <Cube onClick={(e: any) => handleClick(e)}>
        <MainCubePart>
          <img src={iconSrc} alt={props.type} />
        </MainCubePart>
        <CubeDescription>{props.title}</CubeDescription>
        <RemoveButton isVisible={isAdmin} onClick={(e) => { handleDeleteButton(e) }}>-</RemoveButton>
      </Cube>

      {isModalOpen.length > 0 && <CodeBlock
        type={props.type}
        body={props.body}
        title={props.title}
        code={props.body}
        codeType={props.codeType}
        description={props.description}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />}
    </>
  );
};

export default ContentCube;
