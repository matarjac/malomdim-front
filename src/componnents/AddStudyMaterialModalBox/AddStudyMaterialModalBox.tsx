import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import material, {
    setMaterial,
    updatedMaterial,
} from "../../store/Slicers/material";
import { updatedSubTopic } from "../../store/Slicers/subTopic";
import { RootState } from "../../store/store";
import {
    ModalBoxContent,
    ModalOverLay,
    StyledDurationButtons,
    StyledAddButton,
} from "../../StyledComponents/AddDataModalBox";
import {
    FilterButton,
    FiltersList,
    GeneralSpan,
} from "../../StyledComponents/StyledLibrary";
import { StyledInput } from "../../StyledComponents/StyledSignInComponents";
import { AddSubTopicButton } from "../../StyledComponents/StyledSubTopicModal";
import { ContentTypes } from "../../Types/enum/contentCube";
import { serverAddress } from "../../utility/serverAdress";

interface IAddMaterialModalBox {
    isShown: boolean;
    subTopicId: string
    onClose: () => void;
}

interface IStudyMaterial {
    title: string;
    link: string;
    type: ContentTypes;
}

const AddStudyMaterialModalBox: React.FC<IAddMaterialModalBox> = (props: IAddMaterialModalBox) => {

    const [studyMaterialsState, setStudyMaterialsState] = useState([
        { title: "", link: "", type: ContentTypes.Videos },
    ]);
    const addAnotherMaterial = () => {
        setStudyMaterialsState([
            ...studyMaterialsState,
            { title: "", link: "", type: ContentTypes.Videos },
        ]);
    };
    const updateMaterialType = (index: number, newValue: ContentTypes) => {
        setStudyMaterialsState((prevArray) => {
            const newArray = [...prevArray];
            newArray[index].type = newValue;
            return newArray;
        });
    };
    const updateMaterialTitle = (index: number, newValue: string) => {
        setStudyMaterialsState((prevArray) => {
            const newArray = [...prevArray];
            newArray[index].title = newValue;
            return newArray;
        });
    };
    const updateMaterialLink = (index: number, newValue: string) => {
        setStudyMaterialsState((prevArray) => {
            const newArray = [...prevArray];
            newArray[index].link = newValue;
            return newArray;
        });
    };
    const handleAddStudyMaterials = (studyMaterials: IStudyMaterial[]) => {
        let isInputEmpty = false;

        studyMaterials.forEach((material) => {
            const values = Object.values(material);
            if (values.some((val) => val == "")) {
                isInputEmpty = true;
            }
        });

        isInputEmpty && alert("please fill all input filleds.");

        if (!isInputEmpty) {
            handleData(studyMaterials);
            handleClose();
        }

    };

    const handleData = (studyMaterials: IStudyMaterial[]) => {
        const finalDataToPost = { subTopicId: props.subTopicId, studyMaterials }
        console.log(finalDataToPost);
    };

    const handleClose = () => {

        setStudyMaterialsState([
            { title: "", link: "", type: ContentTypes.Videos },
        ]);
        props.onClose();
    };

    return (
        <>
            {props.isShown && (
                <ModalOverLay onClick={handleClose}>
                    <ModalBoxContent
                        width={50}
                        height={75}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <GeneralSpan fontSize={18} fontWeight={600}>
                            Add Study materials to
                        </GeneralSpan>

                        <AddSubTopicButton onClick={addAnotherMaterial}>
                            <img src="./icons/green-plus-icon.svg" alt="" />
                        </AddSubTopicButton>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                overflow: "scroll",
                                gap: "10px",
                                height: "250px",
                            }}
                        >
                            {studyMaterialsState.map((studyMaterial, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        gap: "10px",
                                    }}
                                >
                                    <StyledInput
                                        placeholder="Title"
                                        style={{ width: "50%" }}
                                        onChange={(e) => {
                                            updateMaterialTitle(index, e.target.value);
                                        }}
                                    />
                                    <StyledInput
                                        placeholder="URL"
                                        style={{ width: "70%" }}
                                        onChange={(e) => {
                                            updateMaterialLink(index, e.target.value);
                                        }}
                                    />
                                    <FilterButton
                                        isSelected={
                                            studyMaterialsState[index].type == ContentTypes.Videos
                                        }
                                        onClick={() => {
                                            updateMaterialType(index, ContentTypes.Videos);
                                        }}
                                    >
                                        video
                                    </FilterButton>
                                    <FilterButton
                                        isSelected={
                                            studyMaterialsState[index].type == ContentTypes.Links
                                        }
                                        onClick={() => {
                                            updateMaterialType(index, ContentTypes.Links);
                                        }}
                                    >
                                        link
                                    </FilterButton>
                                </div>
                            ))}
                        </div>
                        <StyledAddButton onClick={() => handleAddStudyMaterials(studyMaterialsState)} style={{ marginTop: "10px", fontSize: '16px' }}>
                            Add Study Materials
                        </StyledAddButton>
                    </ModalBoxContent>
                </ModalOverLay>
            )}
        </>
    );
};

export default AddStudyMaterialModalBox;
