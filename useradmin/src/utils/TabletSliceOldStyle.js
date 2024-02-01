import {createStore}  from 'react-redux'

const initialState = {
    value:[]
}

function appReducer (prevState=initialState,action){
    switch (action.type) {
        case addOldTablet: return{
            ...prevState,
            value:prevState.value.push(action.payload)
        }
        case remOldTablet: return{
            ...prevState,
            value:prevState.value.pop()
        }
          
    
        default:
            break;
    }
}



const oldTableSlice = createStore(appReducer)
export default oldTableSlice

