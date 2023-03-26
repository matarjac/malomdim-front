import React from 'react'
import { GeneralSpan, LibrarySideMenuContainer, SubTopicButton, SubTopicsListContainer } from '../../../StyledComponents/StyledLibrary';

export const LibrarySideMenu: React.FC = () => {

    return (
        <LibrarySideMenuContainer>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', padding: '10px, 8px', gap: '8px', alignItems: "center" }}>
                    <img src="./icons/sub-topics-icon.svg" alt="" style={{ padding: '4.75px' }} />
                    <GeneralSpan fontSize={18} fontWeight={500} >sub topics</GeneralSpan>
                </div>
            </div>

            <SubTopicsListContainer>
                <li style={{ all: 'unset' }}><SubTopicButton>Hooks</SubTopicButton></li>
                <li style={{ all: 'unset' }}><SubTopicButton>Styled Components</SubTopicButton></li>
                <li style={{ all: 'unset' }}><SubTopicButton>General Components</SubTopicButton></li>
            </SubTopicsListContainer>
        </LibrarySideMenuContainer >
    )
}

export default LibrarySideMenu;

