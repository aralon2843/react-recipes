import actions from '../actions/recipePage'

const initialState = {
  recipeInformation: {},
  isLoaded: false,
  error: false,
}

const recipePage = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_RECIPE_INFORMATION_BY_ID:
      return {
        ...state,
        isLoaded: false,
      }

    case actions.GET_RECIPE_INFORMATION_BY_ID_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        error: false,
        recipeInformation: payload,
      }

    case actions.GET_RECIPE_INFORMATION_BY_ID_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: true,
      }
    default:
      return state
  }
}

export default recipePage
