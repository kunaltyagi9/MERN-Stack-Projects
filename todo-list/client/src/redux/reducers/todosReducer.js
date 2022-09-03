import * as actionTypes from '../actions/types';

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GETALL_TODO:
      return action.payload;

    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state];

    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );

    case actionTypes.UPDATE_TODO:
      return state.map(todo =>
        todo._id === action.payload._id
          ? { ...todo, name: action.payload.name }
          : todo
      );

    case actionTypes.DELETE_TODO:
      return state.filter(todo => todo._id !== action.payload._id);
      
    default:
      return state;
  }
}
