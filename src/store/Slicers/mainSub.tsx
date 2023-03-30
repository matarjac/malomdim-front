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
      return data.data;
    })
    .catch((error) => {
      console.error("Error getting main sub list data:", error);
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
      state.currentMainSub = action.payload.todaySub._id;
    },
    updatedCurrentMainSub: (state, action) => {
      state.currentMainSub = action.payload;
    },
  },
});

export const { updatedMainSub, updatedCurrentMainSub } = MainSubSlice.actions;

export default MainSubSlice.reducer;
