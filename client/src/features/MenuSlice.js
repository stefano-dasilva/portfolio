import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isToggle : "false"
}

const MenuSlice = createSlice({
    name : "menu",
    initialState,
    reducers : {
        setToggle : (state) =>{
            state.isToggle = !state.isToggle
        }
    }

})

export const {setToggle} = MenuSlice.actions;
export default MenuSlice.reducer