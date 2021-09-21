import actions from '../actions/search';

const initialState = {
  searchValue: null,
};

const recipePage = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: payload,
      };

    default:
      return state;
  }
};

export default recipePage;
