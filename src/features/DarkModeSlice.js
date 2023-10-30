import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const darkModeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const {setDarkMode } = darkModeSlice.actions 
export default darkModeSlice.reducer
