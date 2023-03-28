import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IMainSub } from "../../Types/interface/dataInterfaces";
import { serverAddress } from "../store";
// const yearInMilliseconds = 31536000000;
export interface IMainSubState {
  mainSubList: IMainSub[];
  currentMainSub: string;
  // DateList: {
  //   id: string;
  //   title: string;
  //   beginsDay: number;
  //   endDate: number;
  // }[];
}
const getMainSubData = async () => {
  return await fetch("http://localhost:8000/mainSub")
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.error("Error getting main sub list data:", error);
    });
};
const getTodaySub = async () => {
  return await fetch("http://localhost:8000/mainSub/today")
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.error("Error getting today main sub id:", error);
    });
};
const mainSubList = await getMainSubData();
const todayMainId: IMainSub = await getTodaySub();
console.log(todayMainId._id);
export const MainSubSlice = createSlice({
  name: "MainSub",
  initialState: {
    mainSubList: mainSubList,
    currentMainSub: todayMainId._id.toString(),
    // DateList: mainSubList.DateList,
  } as IMainSubState,
  reducers: {
    updatedMainSub: (state, action) => {
      state.mainSubList = action.payload.mainSubs;
      // state.DateList = action.payload.DateList;
    },
    updatedCurrentMainSub: (state, action) => {
      state.currentMainSub = action.payload;
    },
  },
});

export const { updatedMainSub, updatedCurrentMainSub } = MainSubSlice.actions;

export default MainSubSlice.reducer;
