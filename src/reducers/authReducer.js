import types from "../types";

const initialState = {
  checking: true,
  logged: false,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_REGISTER:
      return {
        ...state,
        checking: false,
        logged: true,
        user: action.payload,
      };
    case types.AUTH_LOGIN:
      return {
        ...state,
        checking: false,
        logged: true,
        user: action.payload,
      };
    case types.AUTH_CHECKING_FINISH:
      return {
        ...state,
        checking: false,
      };
    case types.AUTH_LOGOUT:
      return {
        ...state,
        checking: false,
        logged: false,
        user: null,
      };
    default:
      return state;
  }
};
