import { put, call, takeEvery } from 'redux-saga/effects';
import API from '../../service/api';
import {
  getSearchAutocompleteError,
  getSearchAutocompleteSuccess,
} from '../actionCreators/search';
import actions from '../actions/search';

export function* watchGetSearchAutocomplete() {
  yield takeEvery(actions.GET_SEARCH_AUTOCOMPLETE, doGetSearchAuotocomplete);
}

const fetchSearchAutocomplete = (searchValue) => {
  return API.getSearchAutocomplete(searchValue);
};

function* doGetSearchAuotocomplete(action) {
  const { payload } = action;

  try {
    const response = yield call(fetchSearchAutocomplete, payload);
    console.log(response);
    yield put(getSearchAutocompleteSuccess(response));
  } catch {
    yield put(getSearchAutocompleteError());
  }
}
