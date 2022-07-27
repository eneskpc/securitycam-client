import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import LocaleResources, { Language, LocaleResourceModel } from "../../LocaleResources";

export interface LocaleState {
  languageCode: Language;
  languageResources: LocaleResourceModel;
}

const initialState: LocaleState = {
  languageCode: Language.TR,
  languageResources: LocaleResources[Language.TR],
};

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<Language>) => {
      switch (action.payload) {
        case Language.TR:
          state.languageCode = Language.TR;
          state.languageResources = LocaleResources[Language.TR];
          break;
        case Language.EN:
          state.languageCode = Language.EN;
          state.languageResources = LocaleResources[Language.EN];
          break;
      }
    },
  },
});

export const { change } = localeSlice.actions;
export default localeSlice.reducer;
