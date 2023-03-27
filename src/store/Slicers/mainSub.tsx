import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IMainSub } from "../../Types/interface/dataInterfaces";
import { serverAddress } from "../store";
// const yearInMilliseconds = 31536000000;
export interface IMainSubState {
  mainSubList: IMainSub[];
  currentMainSub: string;
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
const mainSubList: IMainSub[] = await getMainSubData();
const todayMainId: string = await getTodaySub();
export const MainSubSlice = createSlice({
  name: "MainSub",
  initialState: {
    mainSubList: mainSubList,
    currentMainSub: todayMainId,
  } as IMainSubState,
  reducers: {
    updatedMainSub: (state, action) => {
      state.mainSubList = action.payload.mainSubList;
    },
    // updatedCurrentMainSub: (state, action) => {
    //   state.currentMainSub = action.payload;
    // },
  },
});

export const { updatedMainSub } = MainSubSlice.actions;

export default MainSubSlice.reducer;
