import { put, call, takeEvery } from 'redux-saga/effects'
import API from '../../service/api'
import {
  getNextRecipesByCategoryError,
  getNextRecipesByCategorySuccess,
} from '../actionCreators/mainPage'
import actions from '../actions/mainPage'

export function* watchGetNextRecipesByCategory() {
  yield takeEvery(
    actions.GET_NEXT_RECIPES_BY_CATEGORY,
    doGetNextRecipesByCategory
  )
}

const fetchNextRecipesByCategory = ({ category, offset }) => {
  return API.getNextRecipesByCategory(category, offset )
}

function* doGetNextRecipesByCategory(action) {
  const { payload } = action

  try {
    const response = yield call(fetchNextRecipesByCategory, payload)
    yield put(getNextRecipesByCategorySuccess(response))
  } catch {
    yield put(getNextRecipesByCategoryError())
  }
}
