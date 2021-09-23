import actions from '../actions/search';

export const setSearchValue = (payload) => {
  return {
    type: actions.SET_SEARCH_VALUE,
    payload,
  };
};

export const getSearchAutocompleteRequest = (payload) => {
  return {
    type: actions.GET_SEARCH_AUTOCOMPLETE,
    payload,
  };
};

export const getSearchAutocompleteSuccess = (payload) => {
  return {
    type: actions.GET_SEARCH_AUTOCOMPLETE_SUCCESS,
    payload,
  };
};

export const getSearchAutocompleteError = () => {
  return {
    type: actions.GET_SEARCH_AUTOCOMPLETE_ERROR,
  };
};
