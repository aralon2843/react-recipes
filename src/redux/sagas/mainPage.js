import { takeLatest, put, call, takeEvery } from 'redux-saga/effects'
import API from '../../service/api'
import { getRecipesByCategoryError, getRecipesByCategorySuccess } from '../actionCreators/mainPage'
import actions from '../actions/mainPage'

export function* watchGetRecipesByCategory() {
  yield takeEvery(actions.GET_RECIPES_BY_CATEGORY, doGetRecipesByCategory)
}

const fetchRecipesByCategory = (category) => {
  return API.getRecipesByCategory(category)
}

function* doGetRecipesByCategory(action) {
  const { payload } = action

  try {
    const response = yield call(fetchRecipesByCategory, payload)
    yield put(getRecipesByCategorySuccess(response))
  } catch {
    yield put(getRecipesByCategoryError())
  }
}
