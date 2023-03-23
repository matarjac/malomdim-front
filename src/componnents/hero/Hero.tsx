import React, { useState, useEffect } from 'react'
import heroStyles from './hero.module.css';
import styled from "styled-components";

interface IProgressBar {
    widthPer: number;
}

interface ITopicTitle {

}

export const ProgressBarProgress = styled.div<IProgressBar>`
    
    height: 100%;
    background-color: green;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    width: ${(props) => props.widthPer}%;
    transition: width 1s;

`

export const Hero: React.FC = () => {

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
        <>
            <div className={heroStyles.heroContainer}>
                <span className='current-topic'>HTML</span>
                <div className={heroStyles.progressBar}>
                    <ProgressBarProgress widthPer={progress} />
                </div>
                <span className='next-topic'>css</span>
            </div>

        </>
    )
}

export default Hero;