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

    @media only screen and (max-width: 900px) {
        .daysCountDown {
            font-size: 18px;
    }
}
`

export const SubjectTitleSpan = styled.span`
    color: white;
    font-size: 3vw;
    padding: 10px;
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
                <div className={heroStyles.upperHero}>
                    <SubjectTitleSpan>Node.js</SubjectTitleSpan>
                    <span className={heroStyles.daysCountDown}>3 days to go</span>
                    <SubjectTitleSpan>MySQL</SubjectTitleSpan>
                </div>
                <div className={heroStyles.progressBar}>
                    <ProgressBarProgress widthPer={progress} />
                </div>
            </div>

        </>
    )
}

export default Hero;