import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TreeStateType } from "../types/TreeTypes";

const initialState: TreeStateType = {
  garlandStatus: Boolean(localStorage.getItem("GarlandStatus")) || false,
  garlandColor: localStorage.getItem("GarlandColor") || "",
  imgBG: Number(localStorage.getItem("imgBG")) || 0,
  tree: Number(localStorage.getItem("tree")) || 0,
  audioStatus: Boolean(localStorage.getItem("Audio")) || false,
  snowStatus: Boolean(localStorage.getItem("Snow")) || false,
};
export const treeSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
    selectTree: (state, action: PayloadAction<number>) => {
      state.tree = action.payload;
      localStorage.setItem("tree", state.tree.toString());
    },
    selectBG: (state, action: PayloadAction<number>) => {
      state.imgBG = action.payload;
      localStorage.setItem("imgBG", state.imgBG.toString());
    },
    statusGarland: (state, action: PayloadAction<boolean>) => {
      state.garlandStatus = action.payload;
      localStorage.setItem("GarlandStatus", state.garlandStatus.toString());
    },
    selectGarlandColor: (state, action: PayloadAction<string>) => {
      state.garlandColor = action.payload;
      localStorage.setItem("GarlandColor", state.garlandColor);
    },
    statusAudio: (state) => {
      state.audioStatus = !state.audioStatus;
      localStorage.setItem("Audio", state.audioStatus.toString());
    },
    statusSnow: (state) => {
      state.snowStatus = !state.snowStatus;
      localStorage.setItem("Audio", state.snowStatus.toString());
    },
  },
});

export const {
  statusGarland,
  selectBG,
  selectTree,
  statusAudio,
  statusSnow,
  selectGarlandColor,
} = treeSlice.actions;

export default treeSlice.reducer;
