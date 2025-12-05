import { ADD_TODO, REMOVE_TODO } from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    
    case REMOVE_TODO:
      return state.filter((todo, index) => index !== action.payload);
    
    default:
      return state;
  }
};

export default reducer;