import actionTypes from './actionTypes';

const initialState = {
  users: [
  ],
  alert: {},
  pageNumber: 1,
  canLoadUsers: true,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADDED_USERS: {
      return { ...state, users: state.users.concat(action.payload) };
    }
    case actionTypes.CAN_LOAD_USERS: {
      return { ...state, canLoadUsers: action.payload };
    }
    case actionTypes.INCREMENTED_PAGE_NUMBER: {
      return { ...state, pageNumber: action.payload };
    }
    case actionTypes.DISPLAY_MESSAGE: {
      return { ...state, alert: action.payload };
    }
    default:
      return state;
  }
}


export default userReducer;
