import { configureStore } from "@reduxjs/toolkit";
import mainSubReduce, { IMainSubState } from "./Slicers/mainSub";
import MaterialReduce, { IMaterialState } from "./Slicers/material";
import SubTopicReduce, { ISubTopicState } from "./Slicers/subTopic";
import StudentsReduce, { IStudentState } from "./Slicers/students";
export interface RootState {
  mainSub: IMainSubState;
  subTopic: ISubTopicState;
  material: IMaterialState;
  students: IStudentState;
}
export default configureStore({
  reducer: {
    mainSub: mainSubReduce,
    subTopic: SubTopicReduce,
    material: MaterialReduce,
    students: StudentsReduce,
  },
});
