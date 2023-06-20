import actionTypes from "../actions/actionTypes";
const initialState = {
  pending: false,
  success: false,
  datas: [],
  fail: false,
  error: "",
};

const datasReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.dataActions.GET_DATAS_START:
      return {
        ...state,
        pending: true,
        success: false,
      };
    case actionTypes.dataActions.GET_DATAS_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        fail: false,
        datas: action.payload,
      };
    case actionTypes.dataActions.GET_DATAS_FAIL:
      return {
        ...state,
        pending: false,
        success: false,
        fail: true,
        error: action.payload,
      };

    case actionTypes.dataActions.ADD_DATAS:
      return {
        ...state,
        datas: [...state.datas, action.payload],
      };

    default:
      return state;
  }
};

export default datasReducer;
