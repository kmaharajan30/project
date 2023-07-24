import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../assets/data/dummyData";

export const sliderSlice = createSlice({
    name:"slider",
    initialState:{
        value: 0,
        length: sliderData.length,
    },
    reducers:{
        prevSlide(state, action){
            
            state.value = action.payload < 0 ? state.length-1 : action.payload;
            console.log("action", action);
            console.log("state", state);
        },
        nextSlide(state, action){
            console.log("action", action);
            console.log("state", state);
            state.value = action.payload > state.length-1 ? 0 : action.payload;
            
        },
        dotSlide(state, action){
            const slide = action.payload;
            state.value = slide;
        }

    }
})

export const {prevSlide, nextSlide, dotSlide} = sliderSlice.actions;
export default sliderSlice.reducer;