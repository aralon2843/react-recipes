import actions from '../actions/mainPage'

export const setActiveCategory = (payload) => ({
  type: actions.SET_ACTIVE_CATEGORY,
  payload,
})

export const getRecipesByCategoryRequest = (payload) => ({
  type: actions.GET_RECIPES_BY_CATEGORY,
  payload,
})

export const getRecipesByCategorySuccess = (payload) => ({
  type: actions.GET_RECIPES_BY_CATEGORY_SUCCESS,
  payload,
})

export const getRecipesByCategoryError = () => ({
  type: actions.GET_RECIPES_BY_CATEGORY_ERROR,
})