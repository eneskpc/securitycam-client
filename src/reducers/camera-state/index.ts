import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CameraState {
  stateText: string;
}

const initialState: CameraState = {
  stateText: "",
};

export const cameraStateSlice = createSlice({
  name: "camera-state",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.stateText = action.payload;
    },
  },
});

export const { change } = cameraStateSlice.actions;
export default cameraStateSlice.reducer;
