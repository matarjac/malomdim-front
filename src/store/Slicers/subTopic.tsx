import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ISubTopics } from "../../Types/interface/dataInterfaces";
import { serverAddress } from "../store";
// const yearInMilliseconds = 31536000000;
export interface ISubTopicState {
  allSubTopics: ISubTopics[];
  value: ISubTopics[];
  currentSubTopic: string;
}
const getSubSubData = async () => {
  return await fetch("http://localhost:8000/subTopics")
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.error("Error getting sub topic data:", error);
    });
};

const subTopics: ISubTopics[] = await getSubSubData();

export const SubTopicSlice = createSlice({
  name: "SubTopic",
  initialState: {
    allSubTopics: subTopics,
    value: subTopics,
    currentSubTopic: "",
  } as ISubTopicState,
  reducers: {
    setSubTopic: (state, action) => {
      const mainSubId = action.payload;
      state.value = state.allSubTopics.filter(
        (subTopic) => subTopic.idMainSub === mainSubId
      );
    },
    updatedSubTopic: (state, action) => {
      state.allSubTopics = action.payload;
      state.allSubTopics = action.payload;
    },
    updatedCurrentSubTopic: (state, action) => {
      state.currentSubTopic = action.payload;
    },
  },
});

export const { setSubTopic, updatedSubTopic, updatedCurrentSubTopic } =
  SubTopicSlice.actions;

export default SubTopicSlice.reducer;
