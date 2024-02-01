import { configureStore } from "@reduxjs/toolkit";
import userStoreReducer from "./userStore";
import employeeStoreReducer from "./employeeStore";
import counterSlice from "./counterSlice";
import counterTestSlice from "./counterTestSlice";
import subMenu from './reduxProfileSubtagIndex'
import tabletSlize from "./tabletSlize";
const appStore = configureStore({
    reducer:{
        user:userStoreReducer,
        employee:employeeStoreReducer,
        counter:counterSlice,
        testCounter:counterTestSlice,
        subMenu:subMenu,
        tablet:tabletSlize
    }
})

export default appStore ;