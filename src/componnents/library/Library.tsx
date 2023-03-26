import React, { useState, useEffect } from 'react'
import libraryStyles from './library.module.css';
import { LibraryContainer, ProgressBarProgress, LibrarySection, LibrarySideMenuContainer } from '../../StyledComponents/StyledLibrary';
import LibraryHeader from './libraryHeader/LibraryHeader';
import LibrarySideMenu from './librarySideMenu/LibrarySideMenu';
import LibraryContent from './libraryContent/LibraryContent';

export const Library: React.FC = () => {

    const [progress, setProgress] = useState<number>(0);

    const fillProgress = async () => {
        setTimeout(() => {
            setProgress(70);
        }, 1000);
    }

    useEffect(() => {
        fillProgress();
    }, [])

    return (
        <LibrarySection id='section'>
            <LibraryContainer>
                <LibraryHeader />
                <div style={{ display: 'flex', width: '100%', height: '75%' }}>
                    <LibrarySideMenu />
                    <LibraryContent />
                </div>
            </LibraryContainer>
        </LibrarySection>

    )
}

export default Library;

