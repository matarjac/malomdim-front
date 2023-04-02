import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IMainSub } from "../../Types/interface/dataInterfaces";
import { serverAddress } from "../../utility/serverAdress";
export interface IMainSubState {
  mainSubList: IMainSub[];
  currentMainSub: string;
}
const getMainSubData = async () => {
  return await fetch(serverAddress + "/mainSub")
    .then((response) => response.json())
    .then((data) => {
      if (!data.data.todaySub) {
        data.data.todaySub = "";
      }
      return data.data;
    })
    .catch((error) => {
      console.error("Error getting main sub list data:", error);
      return;
    });
};
const mainSubData = await getMainSubData();

export const MainSubSlice = createSlice({
  name: "MainSub",
  initialState: {
    mainSubList: mainSubData.mainSubList,
    currentMainSub: mainSubData.todaySub._id,
  } as IMainSubState,
  reducers: {
    updatedMainSub: (state, action) => {
      state.mainSubList = action.payload.mainSubList;
      if (action.payload.todaySub._id !== null) {
        state.currentMainSub = action.payload.todaySub._id;
      } else {
        state.currentMainSub = "";
      }
    },
    updatedCurrentMainSub: (state, action) => {
      state.currentMainSub = action.payload;
    },
  },
});
export const { updatedMainSub, updatedCurrentMainSub } = MainSubSlice.actions;

export default MainSubSlice.reducer;
