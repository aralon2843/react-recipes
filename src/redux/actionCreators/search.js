import actions from '../actions/search';

export const setSearchValue = (payload) => {
  return {
    type: actions.SET_SEARCH_VALUE,
    payload,
  };
};
