import {FETCHING, FETCHED, GET_ERROR, REMOVE_ERROR} from '../constants/actions';

const reducer = (
  state = {
    fetching: false,
    err: null,
    err_msg: null,
  },
  action,
) => {
  switch (action.type) {
    case FETCHING: {
      return {...state, fetching: true};
    }
    case FETCHED: {
      return {...state, fetching: false};
    }
    case GET_ERROR: {
      return {...state, err_msg: action.payload};
    }
    case REMOVE_ERROR: {
      return {...state, err_msg: null, err: false};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
