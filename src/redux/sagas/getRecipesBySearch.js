import { put, call, takeEvery } from 'redux-saga/effects';
import API from '../../service/api';
import {
  getRecipesBySearchError,
  getRecipesBySearchSuccess,
} from '../actionCreators/mainPage';
import actions from '../actions/mainPage';

export function* watchGetRecipesBySearch() {
  yield takeEvery(actions.GET_RECIPES_BY_SEARCH, doGetRecipesBySearch);
}

const fetchRecipesBySearch = (searchValue) => {
  return API.getRecipesBySearch(searchValue);
};

function* doGetRecipesBySearch(action) {
  const { payload } = action;

  try {
    const response = yield call(fetchRecipesBySearch, payload);
    yield put(getRecipesBySearchSuccess(response));
  } catch {
    yield put(getRecipesBySearchError());
  }
}
