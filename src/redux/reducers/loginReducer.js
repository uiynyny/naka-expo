import * as t from '../actionTypes';
import { initialUserState } from '../state';

export const loginReducer = (state = initialUserState, action) => {
  let payload = action.payload;
  switch (action.type) {
    case t.LOGIN:
      return {
        ...state,
        ...payload,
        isLoggedIn: true,
      };
    case t.LOGOUT:
      return {
        ...initialUserState,
        isLoggedIn: false,
      };
    case t.SET_PROPERTY:
      return {
        ...state,
        ...payload,
      };
    case t.SET_PREFERENCE:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          ...payload,
        },
      };
    default:
      return state;
  }
};

