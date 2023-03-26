import React from 'react'
import { GeneralSpan, LibraryContentContainer } from '../../../StyledComponents/StyledLibrary';
import MaterialsFilter from './materialsFilter/MaterialsFilter';

export const LibraryContent: React.FC = () => {

    return (
        <LibraryContentContainer>
            <MaterialsFilter/>
        </LibraryContentContainer>
    )
}

export default LibraryContent;

