import { createSlice } from "@reduxjs/toolkit";


const CounterTestSlice =  createSlice({
    name:'testCounter',
    initialState:{
        item:0
    },
    reducers:{
        testIncrement:(state , action)=>{
            state.item = state.item+1
        },
        testDicrement:(state,action)=>{
            state.item = state.item-1
        }
    }
})

export const {testDicrement,testIncrement} = CounterTestSlice.actions
export default CounterTestSlice.reducer
