import { configureStore } from "@reduxjs/toolkit";
import CameraStateReducer from "./reducers/camera-state";
import LocaleReducer from "./reducers/locale";

export const store = configureStore({
  reducer: {
    locale: LocaleReducer,
    cameraState: CameraStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
