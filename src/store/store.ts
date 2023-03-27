import { configureStore } from "@reduxjs/toolkit";
import mainSubReduce, { IMainSubState } from "./Slicers/mainSub";
import MaterialReduce, { IMaterialState } from "./Slicers/material";
import SubTopicReduce, { ISubTopicState } from "./Slicers/subTopic";
export const serverAddress = "http://localhost:8000";
export interface RootState {
  mainSub: IMainSubState;
  subTopic: ISubTopicState;
  material: IMaterialState;
}
export default configureStore({
  reducer: {
    mainSub: mainSubReduce,
    subTopic: SubTopicReduce,
    material: MaterialReduce,
  },
});
