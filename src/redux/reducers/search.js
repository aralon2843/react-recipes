import actions from '../actions/search';

const initialState = {
  searchValue: null,
  autocomplete: [],
  isLoaded: false,
  error: false,
};

const recipePage = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: payload,
      };

    case actions.GET_SEARCH_AUTOCOMPLETE:
      return {
        ...state,
        isLoaded: false,
        error: false,
      };
    case actions.GET_SEARCH_AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        autocomplete: [...payload],
        isLoaded: true,
        error: false,
      };
    case actions.GET_SEARCH_AUTOCOMPLETE_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: true,
      };
    default:
      return state;
  }
};

export default recipePage;
