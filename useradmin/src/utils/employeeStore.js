import { createSlice } from "@reduxjs/toolkit";

const employee = createSlice({
    name:'employ',
    initialState:{
        employee:['sandeep','midhun','ranjith'],
    },
    reducers:{
        addEmployee:(state,action)=>{
            console.log(action.payload,state.employee,'action.payloadaction.payload')
            state.employee.push(action.payload);
        },
        removeEmployee:(state,action)=>{
            state.employee.pop()
        }
    }
    
}) 

export const {addEmployee,removeEmployee}=employee.actions
export default employee.reducer