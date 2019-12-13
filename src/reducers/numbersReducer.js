import {
  FETCH_NUMBERS_START,
  FETCH_NUMBERS_SUCCESS,
  FETCH_NUMBERS_FAILURE
} from "../actions";

const initialState = {
  numbers: "",
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NUMBERS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_NUMBERS_SUCCESS:
      return {
        ...state,
        numbers: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_NUMBERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
