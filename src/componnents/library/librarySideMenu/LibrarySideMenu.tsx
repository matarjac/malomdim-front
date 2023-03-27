import React, { useState } from 'react'
import { AddButton } from '../../../StyledComponents/sideBarStyled';
import { GeneralSpan, LibrarySideMenuContainer, SubTopicButton, SubTopicsListContainer } from '../../../StyledComponents/StyledLibrary';
import AddSubTopicModalBox from '../../AddSubTopicModalBox/AddSubTopicModalBox';

export const LibrarySideMenu: React.FC = () => {

    const [selectedSubTopic, setSelectedSubTopic] = useState('');
    const [addSubTopicModal, setAddSubTopicModal] = useState<boolean>(false);

    const onClose = () => {
        setAddSubTopicModal(false);
    }

    return (
        <>
            <LibrarySideMenuContainer>
                <div style={{ display: 'flex', padding: '10px, 8px', gap: '8px', alignItems: "center" }}>
                    <img src="./icons/sub-topics-icon.svg" alt="" style={{ padding: '4.75px' }} />
                    <GeneralSpan fontSize={18} fontWeight={500} >Sub Topics</GeneralSpan>
                    <AddButton style={{ alignSelf: 'flex-end' }} onClick={() => setAddSubTopicModal(true)} />
                </div>


                <SubTopicsListContainer>
                    <li style={{ all: 'unset' }}><SubTopicButton onClick={() => { setSelectedSubTopic('hooks') }} isSelected={selectedSubTopic == 'hooks'}>Hooks</SubTopicButton></li>
                    <li style={{ all: 'unset' }}><SubTopicButton onClick={() => { setSelectedSubTopic('styled components') }} isSelected={selectedSubTopic == 'styled components'}>Styled Components</SubTopicButton></li>
                    <li style={{ all: 'unset' }}><SubTopicButton onClick={() => { setSelectedSubTopic('general components') }} isSelected={selectedSubTopic == 'general components'}>General Components</SubTopicButton></li>
                </SubTopicsListContainer>
            </LibrarySideMenuContainer >
            <AddSubTopicModalBox isShown={addSubTopicModal} onClose={onClose} />
        </>
    )
}

export default LibrarySideMenu;

