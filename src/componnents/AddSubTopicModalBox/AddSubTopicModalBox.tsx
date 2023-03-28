import React, { ChangeEvent, useEffect, useState } from "react";
import { ModalBoxContent, ModalOverLay, StyledDurationButtons, StyledAddButton } from '../../StyledComponents/AddDataModalBox';
import { FilterButton, FiltersList, GeneralSpan } from "../../StyledComponents/StyledLibrary";
import { StyledInput } from "../../StyledComponents/StyledSignInComponents";
import { AddSubTopicButton } from "../../StyledComponents/StyledSubTopicModal";
import { ContentTypes } from "../../Types/enum/contentCube";

interface IModalBox {
    isShown: boolean;
    onClose: () => void;
}

interface ISubTopicData {
    title: string,
    materials: IStudyMaterial[]
}

interface IStudyMaterial {
    title: string,
    link: string,
    type: ContentTypes | undefined
}

const AddSubTopicModalBox: React.FC<IModalBox> = (props: IModalBox) => {
    const [newSubTopicTitle, setNewSubTopicTitle] = useState<string>('');
    const [materialStudyType1, setMaterialStudyType1] = useState<ContentTypes>(ContentTypes.Videos);
    const studyMaterials: IStudyMaterial[] = [{ title: '', link: '', type: undefined }];
    const [studyMaterialsState, setStudyMaterialsState] = useState(studyMaterials);

    useEffect(() => {
        const studyMaterials: IStudyMaterial[] = [{ title: '', link: '', type: undefined }];
        // setStudyMaterialsState(studyMaterials);
    }, [])
    const handleAddTopic = (newSubTopic: ISubTopicData) => {
        if (!newSubTopic) {
            alert("Please type main topic title.")
        } else {
            console.log(newSubTopic);
            handleClose();
        }
    }

    const handleAddSubTopic = () => {
        if (!newSubTopicTitle) {
            alert('Please type sub topic name.');
        }
        else {
            console.log(newSubTopicTitle);
        }

    }

    const addAnotherSubTopic = () => {
        studyMaterials.push({ title: '', link: '', type: undefined });
        // setStudyMaterialsState(studyMaterials);
    }

    const handleClose = () => {
        props.onClose();
    }

    return (
        <>
            {props.isShown &&
                <ModalOverLay onClick={handleClose}>
                    <ModalBoxContent width={40} height={70} onClick={(e) => e.stopPropagation()}>
                        <GeneralSpan fontSize={18} fontWeight={600}>
                            Add SubTopic
                        </GeneralSpan>
                        <StyledInput placeholder="SubTopic name" onChange={(e) => setNewSubTopicTitle(e.target.value)} />
                        <GeneralSpan fontSize={18} fontWeight={600}>
                            Add Study Material
                        </GeneralSpan>
                        <AddSubTopicButton onClick={addAnotherSubTopic}><img src="./icons/green-plus-icon.svg" alt="" />
                        </AddSubTopicButton>

                        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'scroll', gap: '10px', minHeight: '100px', maxHeight: '300px' }}>
                            {studyMaterialsState.map((studyMaterial) =>
                            (<div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gap: '10px'
                            }}>
                                <StyledInput placeholder="URL" style={{ width: '70%' }} />
                                <FilterButton isSelected={materialStudyType1 == ContentTypes.Videos} onClick={() => { setMaterialStudyType1(ContentTypes.Videos) }}>video</FilterButton>
                                <FilterButton isSelected={materialStudyType1 == ContentTypes.Links} onClick={() => { setMaterialStudyType1(ContentTypes.Links) }}>link</FilterButton>
                            </div>)
                            )}
                        </div>
                        <StyledAddButton onClick={handleAddSubTopic} style={{ marginTop: '10px' }}>Add SubTopic</StyledAddButton>
                    </ModalBoxContent>
                </ModalOverLay>
            }
        </>
    )
}

export default AddSubTopicModalBox;