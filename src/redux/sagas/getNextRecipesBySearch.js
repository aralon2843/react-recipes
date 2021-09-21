import { put, call, takeEvery } from 'redux-saga/effects';
import API from '../../service/api';
import {
  getNextRecipesBySearchError,
  getNextRecipesBySearchSuccess,
} from '../actionCreators/mainPage';
import actions from '../actions/mainPage';

export function* watchGetNextRecipesBySearch() {
  yield takeEvery(actions.GET_NEXT_RECIPES_BY_SEARCH, doGetNextRecipesBySearch);
}

const fetchNextRecipesBySearch = ({ searchValue, offset }) => {
  return API.getNextRecipesBySearch(searchValue, offset);
};

function* doGetNextRecipesBySearch(action) {
  const { payload } = action;

  try {
    const response = yield call(fetchNextRecipesBySearch, payload);
    yield put(getNextRecipesBySearchSuccess(response));
  } catch {
    yield put(getNextRecipesBySearchError());
  }
}
