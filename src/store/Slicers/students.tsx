import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverAddress } from "../../utility/serverAdress";
export interface IStudentState {
  allStudent: string[];
}
export const StudentsSlice = createSlice({
  name: "SubTopic",
  initialState: {
    allStudent: [],
  } as IStudentState,
  reducers: {
    updatedStudent: (state, action) => {
      state.allStudent = action.payload;
    },
  },
});

export const { updatedStudent } = StudentsSlice.actions;

export default StudentsSlice.reducer;
