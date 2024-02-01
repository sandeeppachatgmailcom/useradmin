import { createSlice } from "@reduxjs/toolkit";

const subMenu = createSlice({
    name:'subMenu',
    initialState:{
        currentTag:''
    },
    reducers:{
         about:(state)=>{
            state.currentTag ='about'
         },
         post:(state)=>{
            state.currentTag ='post'
         },
         friends:(state)=>{
            state.currentTag='friends'
         },
         photos:(state)=>{
            state.currentTag = 'photos'
         },
         video:(state)=>{
            state.currentTag='video'
         }
    }
})

export const {about,post,friends,photos,video} = subMenu.actions;
export default subMenu.reducer;