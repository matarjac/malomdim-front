import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMaterial, updatedMaterial } from "../../../store/Slicers/material";
import { updatedCurrentSubTopic } from "../../../store/Slicers/subTopic";
import { RootState } from "../../../store/store";
import {
  Cube,
  CubeDescription,
  MainCubePart,
} from "../../../StyledComponents/content-cube";
import { RemoveButton } from "../../../StyledComponents/StyledGeneralComponents";
import { ContentTypes } from "../../../Types/enum/contentCube";
import { serverAddress } from "../../../utility/serverAdress";
import CodeBlock from "../../codeBlock/CodeBlock";

interface IContentCube {
  id: string;
  body: string;
  type: string;
  title: string;
  description?: string;
  codeType?: string;
  setIsModalOpen?: () => void;
}

export const ContentCube: React.FC<IContentCube> = (props) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<string>("");

  const user = JSON.parse(sessionStorage.getItem("user") ?? "null");
  const userData = user ? user.role : "";
  const [isAdmin, setIsAdmin] = useState(userData == "teacher");

  const iconSrc: string = "/icons/contantTypes/" + props.type + ".svg";
  const subTopicId: string = useSelector(
    (state: RootState) => state.subTopic.currentSubTopic
  );
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (
      (e.target as HTMLElement).parentElement?.tagName.toLowerCase() ===
      "button"
    ) {
      handleDeleteButton();
    } else {
      if (props.type === ContentTypes.CodeSheets) {
        setIsModalOpen("code");
      } else if (props.type === ContentTypes.Text) {
        setIsModalOpen("text");
      } else if (props.body) {
        window.open(props.body, "_blank");
      }
    }
  };
  const handleDeleteButton = () => {
    const mainSubConfirm = prompt(
      "Please enter 'delete' to confirm delate:",
      ""
    );
    if (mainSubConfirm === "delete") {
      delateMainSub(props.id);
    } else {
      alert("not deleted");
    }
  };
  const delateMainSub = async (deletedMaterial: string) => {
    try {
      const updatedMaterialList = await axios.delete(
        serverAddress + "/materials/teacher",
        {
          data: {
            id: deletedMaterial,
          },
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const materialData = updatedMaterialList.data.data;
      dispatch(updatedMaterial(materialData));
    } catch (error: any) {
      console.log(error);
      alert(error.response.data.message);
      return [];
    }
  };

  return (
    <>
      <Cube type={props.type} onClick={handleClick}>
        <MainCubePart>
          <img src={iconSrc} alt={props.type} />
        </MainCubePart>
        <CubeDescription type={props.type}>
          {props.title.length > 10
            ? props.title.slice(0, 10).concat("...")
            : props.title}
        </CubeDescription>
        <RemoveButton
          isVisible={isAdmin}
          onClick={() => {}}
          style={{ right: "10px" }}
        >
          <img src="./icons/delete-icon-x.svg" alt="" />
        </RemoveButton>
      </Cube>
      {isModalOpen.length > 0 && (
        <CodeBlock
          type={props.type}
          body={props.body}
          title={props.title}
          code={props.body}
          codeType={props.codeType}
          description={props.description}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default ContentCube;
