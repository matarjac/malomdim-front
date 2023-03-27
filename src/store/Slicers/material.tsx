import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IMaterials } from "../../Types/interface/dataInterfaces";
import { serverAddress } from "../store";
// const yearInMilliseconds = 31536000000;
export interface IMaterialState {
  allMaterial: IMaterials[];
  value: IMaterials[];
}
const material = await axios.get("http://localhost:8000/materials");
export const MaterialSlice = createSlice({
  name: "Material",
  initialState: {
    allMaterial: material.data.data,
    value: [],
    // allMaterial: [],
    // value: [],
  } as IMaterialState,
  reducers: {
    setMaterial: (state, action) => {
      const subTopicId = action.payload;
      state.value = state.allMaterial.filter(
        (material) => material.idSubTopic === subTopicId
      );
    },
    updatedMaterial: (state, action) => {
      state.allMaterial = action.payload;
      state.allMaterial = action.payload;
    },
    cleanMaterial: (state) => {
      state.value = [];
    },
  },
});

export const { setMaterial, updatedMaterial, cleanMaterial } =
  MaterialSlice.actions;

export default MaterialSlice.reducer;
