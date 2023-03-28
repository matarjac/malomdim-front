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

export const LibraryHeader: React.FC = () => {
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
  const [progress, setProgress] = useState<number>(0);
  const todayMainSubject = useSelector(
    (state: RootState) => state.mainSub.currentMainSub
  );
  const MainSubjectListDate = useSelector(
    (state: RootState) => state.mainSub.DateList
  );
  // console.log(MainSubjectListDate);

  const CurrentSub = MainSubjectListDate.find(
    (sub) => sub.id === todayMainSubject
  );
  if (!CurrentSub) {
    throw Error("mainSubNotFound");
  }
  const headTitle = CurrentSub.title;
  const dateStart = new Date(CurrentSub?.beginsDay);
  const dateEnd = new Date(CurrentSub.endDate);
  const startDatString =
    month_names_short[dateStart.getMonth()] + " " + dateStart.getDate();
  const endDatString =
    month_names_short[dateEnd.getMonth()] + " " + dateEnd.getDate();
  const percentage: number =
    (Date.now() - CurrentSub.beginsDay) /
    (CurrentSub.endDate - CurrentSub.beginsDay);

  const fillProgress = () => {
    setTimeout(() => {
      setProgress(0);
      if (percentage > 0) {
        // console.log(percentage);
        setProgress(percentage * 100);
      }
    }, 500);
  };

  useEffect(() => {
    fillProgress();
  }, [todayMainSubject]);

  return (
    <HeaderContainer>
      <div style={{ display: "flex", gap: "10px" }}>
        <img src="./language-logos/react-symbol.svg" alt="" />
        <HeaderTitleSpan>
          {headTitle ? headTitle : "No Subject Yet"}
        </HeaderTitleSpan>
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
