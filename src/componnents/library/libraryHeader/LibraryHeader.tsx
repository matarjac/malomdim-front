import React, { useState, useEffect } from 'react'
import libraryStyles from './library.module.css';
import { DateSpan, HeaderContainer, HeaderTitleSpan, ProgressBarProgress } from '../../../StyledComponents/StyledLibrary';

export const LibraryHeader: React.FC = () => {

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
        <HeaderContainer>
            <div style={{ display: 'flex', gap: '10px' }}>
                <img src="./language-logos/react-symbol.svg" alt="" />
                <HeaderTitleSpan>REACT</HeaderTitleSpan>
            </div>
            <div className={libraryStyles.progressBar}>
                <ProgressBarProgress widthPer={progress} />
            </div>
            <div style={{ display: 'flex', width: '73%', justifyContent: 'space-between' }}>
                <DateSpan>July 3</DateSpan>
                <DateSpan>July 5</DateSpan>
            </div>
        </HeaderContainer>
    )
}

export default LibraryHeader;

