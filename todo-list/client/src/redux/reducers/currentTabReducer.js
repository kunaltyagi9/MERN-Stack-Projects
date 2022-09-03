import * as actionTypes from '../actions/types';

export const currentTabReducer = (state = actionTypes.SHOW_ALL, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_TAB:
      return action.filter;
    default:
      return state;
  }
};
