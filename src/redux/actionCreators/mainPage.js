import actions from '../actions/mainPage';

export const setActiveCategory = (payload) => ({
  type: actions.SET_ACTIVE_CATEGORY,
  payload,
});

export const getRecipesByCategoryRequest = (payload) => ({
  type: actions.GET_RECIPES_BY_CATEGORY,
  payload,
});

export const getRecipesByCategorySuccess = (payload) => ({
  type: actions.GET_RECIPES_BY_CATEGORY_SUCCESS,
  payload,
});

export const getRecipesByCategoryError = () => ({
  type: actions.GET_RECIPES_BY_CATEGORY_ERROR,
});

export const getNextRecipesByCategoryRequest = (payload) => ({
  type: actions.GET_NEXT_RECIPES_BY_CATEGORY,
  payload,
});

export const getNextRecipesByCategorySuccess = (payload) => ({
  type: actions.GET_NEXT_RECIPES_BY_CATEGORY_SUCCESS,
  payload,
});

export const getNextRecipesByCategoryError = () => ({
  type: actions.GET_NEXT_RECIPES_BY_CATEGORY_ERROR,
});

export const getRecipesBySearchRequest = (payload) => ({
  type: actions.GET_RECIPES_BY_SEARCH,
  payload,
});

export const getRecipesBySearchSuccess = (payload) => ({
  type: actions.GET_RECIPES_BY_SEARCH_SUCCESS,
  payload,
});

export const getRecipesBySearchError = () => ({
  type: actions.GET_RECIPES_BY_SEARCH_ERROR,
});

export const getNextRecipesBySearchRequest = (payload) => ({
  type: actions.GET_NEXT_RECIPES_BY_SEARCH,
  payload,
});

export const getNextRecipesBySearchSuccess = (payload) => ({
  type: actions.GET_NEXT_RECIPES_BY_SEARCH_SUCCESS,
  payload,
});

export const getNextRecipesBySearchError = () => ({
  type: actions.GET_NEXT_RECIPES_BY_SEARCH_ERROR,
});
