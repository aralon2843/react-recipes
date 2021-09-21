import actions from '../actions/mainPage';

const initialState = {
  recipes: [],
  activeCategory: 'main course',
  isLoaded: false,
  error: false,
};

const mainPage = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: payload,
      };
    case actions.GET_RECIPES_BY_CATEGORY:
      return {
        ...state,
        isLoaded: false,
      };

    case actions.GET_RECIPES_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        error: false,
        recipes: payload,
      };

    case actions.GET_RECIPES_BY_CATEGORY_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: true,
      };

    case actions.GET_NEXT_RECIPES_BY_CATEGORY:
      return {
        ...state,
        isLoaded: false,
      };

    case actions.GET_NEXT_RECIPES_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        error: false,
        recipes: [...state.recipes, ...payload],
      };

    case actions.GET_NEXT_RECIPES_BY_CATEGORY_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: true,
      };

    case actions.GET_RECIPES_BY_SEARCH:
      return {
        ...state,
        activeCategory: null,
        isLoaded: false,
      };

    case actions.GET_RECIPES_BY_SEARCH_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        error: false,
        recipes: payload,
      };

    case actions.GET_RECIPES_BY_SEARCH_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: true,
      };

    case actions.GET_NEXT_RECIPES_BY_SEARCH:
      return {
        ...state,
        isLoaded: false,
      };

    case actions.GET_NEXT_RECIPES_BY_SEARCH_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        error: false,
        recipes: [...state.recipes, ...payload],
      };

    case actions.GET_NEXT_RECIPES_BY_SEARCH_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: true,
      };
    default:
      return state;
  }
};

export default mainPage;
