import React, { ChangeEvent, useState } from "react";
import { ModalBoxContent, ModalOverLay, StyledDurationButtons, StyledAddButton } from '../../StyledComponents/AddDataModalBox';
import { GeneralSpan } from "../../StyledComponents/StyledLibrary";
import { StyledInput } from "../../StyledComponents/StyledSignInComponents";
import { AddSubTopicButton } from "../../StyledComponents/StyledSubTopicModal";

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
}

const AddSubTopicModalBox: React.FC<IModalBox> = (props: IModalBox) => {
    const [newSubTopicTitle, setNewSubTopicTitle] = useState<string>('');
    // const inputTextChanged = (e: ChangeEvent<HTMLInputElement>) => {

    // }

    const handleAddTopic = (newSubTopic: ISubTopicData) => {
        if (!newSubTopic) {
            alert("Please type main topic title.")
        } else {
            console.log(newSubTopic);
            handleClose();
        }
    }

    const handleClose = () => {
        props.onClose();
    }

    return (
        <>
            {props.isShown &&
                <ModalOverLay onClick={handleClose}>
                    <ModalBoxContent width={40} height={35} onClick={(e) => e.stopPropagation()}>
                        <GeneralSpan fontSize={18} fontWeight={600}>
                            Add SubTopic
                        </GeneralSpan>
                        <AddSubTopicButton><img src="./green-plus-icon.svg" alt="" />
                        </AddSubTopicButton>
                    </ModalBoxContent>
                </ModalOverLay>
            }
        </>
    )
}

export default AddSubTopicModalBox;