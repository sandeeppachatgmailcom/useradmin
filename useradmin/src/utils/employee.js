import { createSlice } from "@reduxjs/toolkit";

const employeeTestSlice = createSlice({
    name:'employee',
    initialState:{
        newUser:['hello new user']
    },
    reducers:{
        addUser:(state,action)=>{
            state.newUser.push(action.payload)
        },
        removeUser:(state,action)=>{
            state.newUser.pop()
        }
    }
}
) 

export const  {addUser,removeUser} = employeeTestSlice.actions
export default employeeTestSlice.reducer