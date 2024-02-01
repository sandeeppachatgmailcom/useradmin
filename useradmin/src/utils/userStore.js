import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        user: []
    },
    reducers:{
        logginuser: (state, action) => {
           
            state.user = [];
            state.user.push(action.payload);
        },
        loggoutUser: (state, action) => {
            state.user = [];
        }
    }
})

export const { logginuser, loggoutUser } = userSlice.actions;
export default userSlice.reducer;
