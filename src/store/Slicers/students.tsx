import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverAddress } from "../../utility/serverAdress";
export interface IStudentState {
  allStudent: string[];
}
const getStudentData = async () => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user") ?? "null");
    const response = await axios.get(`${serverAddress}/user/student`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    console.log("updated:", response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.log(error);
    alert(error.response.data.message);
    return [];
  }
};
const studentList: string[] = await getStudentData();
export const StudentsSlice = createSlice({
  name: "SubTopic",
  initialState: {
    allStudent: studentList,
  } as IStudentState,
  reducers: {
    updatedStudent: (state, action) => {
      state.allStudent = action.payload;
    },
  },
});

export const { updatedStudent } = StudentsSlice.actions;

export default StudentsSlice.reducer;
