import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IMaterials } from "../../Types/interface/dataInterfaces";
import { serverAddress } from "../../utility/serverAdress";
export interface IMaterialState {
  allMaterial: IMaterials[];
  value: IMaterials[];
}
const material = await axios.get(serverAddress + "/materials");
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
      const subTopic = action.payload;
      if (subTopic.materialType === "all") {
        state.value = state.allMaterial.filter(
          (material) => material.idSubTopic === subTopic.id
        );
      } else {
        state.value = state.allMaterial.filter(
          (material) =>
            material.idSubTopic === subTopic.id &&
            material.category === subTopic.materialType
        );
      }
    },
    updatedMaterial: (state, action) => {
      state.allMaterial = action.payload;
      state.value = action.payload;
    },
    cleanMaterial: (state) => {
      state.value = [];
    },
  },
});

export const { setMaterial, updatedMaterial, cleanMaterial } =
  MaterialSlice.actions;

export default MaterialSlice.reducer;
