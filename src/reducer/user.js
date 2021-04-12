import {SET_AUTH} from '../constants/actions';

const reducer = (
  state = {
    user: {},
    authenticated: true,
    access_token: null,
  },
  action,
) => {
  switch (action.type) {
    case SET_AUTH: {
      return {
        ...state,
        authenticated: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
