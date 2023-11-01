import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "../features/MenuSlice";
import LanguageSlice from "../features/LanguageSlice";
import DarkModeSlice from "../features/DarkModeSlice";

const store = configureStore({
    reducer : {
        menu : MenuSlice,
        language : LanguageSlice,
        darkmode : DarkModeSlice
    }
})

export default store