import { createSlice } from "@reduxjs/toolkit";

const tabletSlice = createSlice({
    name:'tablet',
    initialState:{
        name:['tablet1',"tablet2",'tablet3','tablet4']
    },
    reducers:{
        addTablet:(state,actions)=>{
            
            state.name.push(actions.payload )
        },
        removeTablet:(state)=>{
            state.name.pop()
        }
    }
})

export const {addTablet,removeTablet} = tabletSlice.actions;
export default tabletSlice.reducer