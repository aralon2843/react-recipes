import actions from '../actions/recipePage'

export const getRecipeInformationByIdRequest = (payload) => ({
  type: actions.GET_RECIPE_INFORMATION_BY_ID,
  payload,
})

export const getRecipeInformationByIdSuccess = (payload) => ({
  type: actions.GET_RECIPE_INFORMATION_BY_ID_SUCCESS,
  payload,
})

export const getRecipeInformationByIdError = () => ({
  type: actions.GET_RECIPE_INFORMATION_BY_ID_ERROR,
})
