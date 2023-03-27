import React, { useState } from 'react'
import { AddButton } from '../../../StyledComponents/sideBarStyled';
import { GeneralSpan, LibrarySideMenuContainer, SubTopicButton, SubTopicsListContainer } from '../../../StyledComponents/StyledLibrary';

export const LibrarySideMenu: React.FC = () => {

    const [selectedSubTopic, setSelectedSubTopic] = useState('');

    return (
        <LibrarySideMenuContainer>
            <div style={{ display: 'flex', padding: '10px, 8px', gap: '8px', alignItems: "center" }}>
                <img src="./icons/sub-topics-icon.svg" alt="" style={{ padding: '4.75px' }} />
                <GeneralSpan fontSize={18} fontWeight={500} >Sub Topics</GeneralSpan>
                <AddButton style={{ alignSelf: 'flex-end' }} onClick={() => console.log("add")} />
            </div>


            <SubTopicsListContainer>
                <li style={{ all: 'unset' }}><SubTopicButton onClick={() => { setSelectedSubTopic('hooks') }} isSelected={selectedSubTopic == 'hooks'}>Hooks</SubTopicButton></li>
                <li style={{ all: 'unset' }}><SubTopicButton onClick={() => { setSelectedSubTopic('styled components') }} isSelected={selectedSubTopic == 'styled components'}>Styled Components</SubTopicButton></li>
                <li style={{ all: 'unset' }}><SubTopicButton onClick={() => { setSelectedSubTopic('general components') }} isSelected={selectedSubTopic == 'general components'}>General Components</SubTopicButton></li>
            </SubTopicsListContainer>
        </LibrarySideMenuContainer >
    )
}

export default LibrarySideMenu;

