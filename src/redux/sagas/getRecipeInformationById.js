import { put, call, takeEvery } from 'redux-saga/effects'
import API from '../../service/api'
import {
  getRecipeInformationByIdError,
  getRecipeInformationByIdSuccess,
} from '../actionCreators/recipePage'
import actions from '../actions/recipePage'

export function* watchGetRecipeInformationById() {
  yield takeEvery(
    actions.GET_RECIPE_INFORMATION_BY_ID,
    doGetRecipeInformationById
  )
}

const fetchRecipeInformationById = (id) => {
  return API.getRecipeInformationById(id)
}

function* doGetRecipeInformationById(action) {
  const { payload } = action

  try {
    const response = yield call(fetchRecipeInformationById, payload)
    yield put(getRecipeInformationByIdSuccess(response))
  } catch {
    yield put(getRecipeInformationByIdError())
  }
}
