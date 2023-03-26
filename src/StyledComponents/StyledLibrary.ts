import styled from "styled-components";
import React from "react";

interface IProgressBar {
  widthPer: number;
}

interface IGeneralSpan {
  fontSize: number;
  fontWeight: number;
}

export const ProgressBarProgress = styled.div<IProgressBar>`
  height: 100%;
  background-color: #66db9c;
  border-radius: 9px;
  width: ${(props) => props.widthPer}%;
  transition: width 1s;

  @media only screen and (max-width: 900px) {
    .daysCountDown {
      font-size: 18px;
    }
  }
`;

export const SubjectTitleSpan = styled.span`
  color: white;
  font-size: 3vw;
  padding: 10px;
`;

export const LibrarySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const LibraryContainer = styled.div`
  position: relative;
  width: 851.86px;
  height: 645.46px;
  /* position: absolute;
  right: 100px;
  top: 93px; */
  background-color: #2d2b52;
  border-radius: 21.3559px;
  box-shadow: 0px 4.74576px 30.8475px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  /* gap: 8px; */
`;
export const DateSpan = styled.span`
  color: white;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  background-color: #39375e;
  border-top-left-radius: 21.3559px;
  border-top-right-radius: 21.3559px;
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
`;
export const HeaderTitleSpan = styled.span`
  font-family: "Poppins";
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  text-transform: capitalize;
`;

export const LibrarySideMenuContainer = styled.div`
  width: 25%;
  background-color: #39375e;
  padding: 14px 8px 0px;
  height: 100%;
  border-bottom-left-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GeneralSpan = styled.span<IGeneralSpan>`
  color: white;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  line-height: 22px;
`;

export const SubTopicsListContainer = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubTopicButton = styled.button`
  all: unset;
  color: #fafafd;
  padding: 9.49153px 11.8644px 9.49153px 9.49153px;
  width: 90%;
  border-radius: 5.9322px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  font-family: "Poppins";

  :focus {
    background-color: #8471df;
  }

  :hover {
    cursor: pointer;
    background-color: #44426c;
  }
`;

export const LibraryContentContainer = styled.div`
  width: 75%;
  height: 100%;
  border-bottom-right-radius: 18px;
`;
