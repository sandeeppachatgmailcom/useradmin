 

const initialState = {
    someData: null,
    counter: 0,
  };
 
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'dicrement':
        
        return { ...state, counter: state.counter-1 };
      case 'increment':
        return { ...state, counter: state.counter + 1 };
      default:
        return state;
    }
  };

export default rootReducer;  