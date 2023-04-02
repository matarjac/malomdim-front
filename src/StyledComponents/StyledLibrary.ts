import styled from "styled-components";

interface IProgressBar {
  widthPer: number;
}

interface IGeneralSpan {
  fontSize: number;
  fontWeight: number;
}

interface IbuttonSelected {
  isSelected: boolean;
}

export const ProgressBarProgress = styled.div<IProgressBar>`
  height: 100%;
  background-color: #66db9c;
  border-radius: 9px;
  width: ${(props) => props.widthPer}%;
  transition: width 1s;
  max-width: 100%;

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

export const LogoHomePage = styled.img`
  scale: 110%;
  position: absolute;
  top: 30px;
  right: 50px;
`;

export const LibrarySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 391px) {
    height: 65vh;
  }
`;

export const LibraryContainer = styled.div`
  width: 951.86px;
  height: 645.46px;
  scale: 0.9;
  background-color: #2d2b52;
  border-radius: 21.3559px;
  box-shadow: 0px 4.74576px 30.8475px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 391px) {
    height: 500px;
    width: 350px;
  }
  @media (min-height: 800px) {
    scale: 1;
  }
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
  @media (max-width: 391px) {
    font-size: 25px;
  }
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
  @media (max-width: 391px) {
    padding: 0px 0px;
    width: 35%;
    font-size: 8px;
  }
`;

export const GeneralSpan = styled.span<IGeneralSpan>`
  color: white;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  line-height: 22px;
  @media (max-width: 391px) {
    display: none;
  }
`;

export const SubTopicsListContainer = styled.div`
  justify-content: start;
  all: unset;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 8px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SubTopicButton = styled.button<IbuttonSelected>`
  all: unset;
  color: #fafafd;
  position: relative;
  padding: 9.49153px 11.8644px 9.49153px 9.49153px;
  width: 90%;
  text-transform: capitalize;
  border-radius: 5.9322px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  font-family: "Poppins";
  background-color: ${(props) => (props.isSelected ? "#8471df" : "")};

  :hover {
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "#8471df" : "#44426c")};
  }
`;

export const LibraryContentContainer = styled.div`
  width: 85%;
  height: 100%;
  border-bottom-right-radius: 18px;
  padding: 14px 35px 18px;

  @media (max-width: 391px) {
    padding: 5px 73px 22px 13px;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 4px 10px;
  @media (max-width: 391px) {
    margin-left: 250px;
  }
`;

export const FiltersList = styled.ul`
  all: unset;
  display: flex;
  flex-direction: row;
  border-radius: 8.99192px;
  background-color: #1a193a;
  padding: 4px;
  @media (max-width: 391px) {
  }
`;

export const FilterButton = styled.button<IbuttonSelected>`
  all: unset;
  cursor: pointer;
  color: #8785a4;
  padding: 7.19354px 7.19354px 7.19354px 10.7903px;
  font-weight: 400;
  font-size: 12px;
  min-width: 65px;
  text-align: center;
  line-height: 10px;
  color: white;
  background-color: ${(props) => (props.isSelected ? "#8471DF" : "")};
  border-radius: 7.19354px;
  @media (max-width: 391px) {
    min-width: 35px;
    font-size: 10px;
    padding: 5px 5px 5px 5px;
  }
`;

export const AddCodeSheetButton = styled.button`
  all: unset;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 7px;
  color: #8471df;
  border: 1px solid #8471df;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 391px) {
    font-size: 12px;
    gap: 2px;
  }
`;
export const CardGrid = styled.div`
  display: grid;
  width: 100%;
  height: 90%;
  padding: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  text-align: center;
  grid-gap: 18px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 391px) {
    width: 118%;
    height: 90%;
    padding: 12px;
  }
`;
