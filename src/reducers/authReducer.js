import types from "../types";

const initialState = {
  checking: true,
  logged: false,
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_REGISTER:
      return {
        ...state,
        checking: false,
        logged: true,
        user: action.payload,
        error: null,
      };
    case types.AUTH_LOGIN:
      return {
        ...state,
        checking: false,
        logged: true,
        user: action.payload,
        error: null,
      };
    case types.AUTH_CHECKING_FINISH:
      return {
        ...state,
        checking: false,
        error: null,
      };
    case types.AUTH_LOGOUT:
      return {
        ...state,
        checking: false,
        logged: false,
        user: null,
        error: null,
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        checking: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
