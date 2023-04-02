import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import libraryStyles from "./library.module.css";
import {
  DateSpan,
  HeaderContainer,
  HeaderTitleSpan,
  ProgressBarProgress,
} from "../../../StyledComponents/StyledLibrary";
import { RootState } from "../../../store/store";
import { IMainSub } from "../../../Types/interface/dataInterfaces";
const month_names_short = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const LibraryHeader: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const todayMainSubject: IMainSub["_id"] = useSelector(
    (state: RootState) => state.mainSub.currentMainSub
  );

  const mainSubList: IMainSub[] = useSelector(
    (state: RootState) => state.mainSub.mainSubList
  );

  const currentSub: IMainSub | undefined = mainSubList.find(
    (sub) => sub._id === todayMainSubject
  );
  let headTitle = "No course css";
  let dateStart = new Date();
  let dateEnd = new Date();
  let startDatString =
    month_names_short[dateStart.getMonth()] + " " + dateStart.getDate();
  let endDatString =
    month_names_short[dateEnd.getMonth()] + " " + dateEnd.getDate();
  let percentage: number = 1;
  if (currentSub) {
    const { title, startDate, endDate } = currentSub;
    headTitle = title;
    dateStart = new Date(startDate);
    dateEnd = new Date(endDate);
    startDatString =
      month_names_short[dateStart.getMonth()] + " " + dateStart.getDate();
    endDatString =
      month_names_short[dateEnd.getMonth()] + " " + dateEnd.getDate();
    percentage = (Date.now() - startDate) / (endDate - startDate);
  }

  const fillProgress = () => {
    setTimeout(() => {
      setProgress(0);
      if (percentage > 0) {
        setProgress(percentage * 100);
      }
    }, 500);
  };

  const chooseLanguageSymbol = () => {
    const lowerredHeadTitle = headTitle.toLowerCase();
    console.log(lowerredHeadTitle);
    let symbol = './language-logos/default-symbol.svg';
    if (lowerredHeadTitle.includes('css')) { symbol = './language-logos/css-symbol.svg'; }
    else if (lowerredHeadTitle.includes('javascript')) { symbol = './language-logos/javascript-symbol.svg'; }
    else if (lowerredHeadTitle.includes('typescript')) { symbol = './language-logos/typescript-symbol.svg'; }
    else if (lowerredHeadTitle.includes('html')) { symbol = './language-logos/html-symbol.svg'; }
    else if (lowerredHeadTitle.includes('node')) { symbol = './language-logos/node-symbol.svg'; }
    else if (lowerredHeadTitle.includes('react')) { symbol = './language-logos/react-symbol.svg'; }
    else { symbol = './language-logos/default-symbol.svg' }

    return symbol;
  }

  useEffect(() => {
    fillProgress();
    chooseLanguageSymbol();
  }, [todayMainSubject, mainSubList]);
  return (
    <HeaderContainer>
      <div style={{ display: "flex", gap: "10px" }}>
        <img src={chooseLanguageSymbol()} alt="" />
        <HeaderTitleSpan>{headTitle}</HeaderTitleSpan>
      </div>
      <div className={libraryStyles.progressBar}>
        <ProgressBarProgress widthPer={progress} />
      </div>
      <div
        style={{
          display: "flex",
          width: "73%",
          justifyContent: "space-between",
        }}
      >
        <DateSpan>{startDatString}</DateSpan>
        <DateSpan>{endDatString}</DateSpan>
      </div>
    </HeaderContainer>
  );
};

export default LibraryHeader;
