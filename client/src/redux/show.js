import { createSlice } from "@reduxjs/toolkit";

export const showSlice = createSlice({
    name: "show",
    initialState: {
        show: true
    },
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload;
        }
    }
});


export const { setShow } = showSlice.actions;

export const showing = (state) => state.show.show;
export default showSlice.reducer;
