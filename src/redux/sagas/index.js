import { all } from 'redux-saga/effects';
import { watchGetNextRecipesByCategory } from './getNextRecipesByCategory';
import { watchGetNextRecipesBySearch } from './getNextRecipesBySearch';
import { watchGetRecipeInformationById } from './getRecipeInformationById';
import { watchGetRecipesByCategory } from './getRecipesByCategory';
import { watchGetRecipesBySearch } from './getRecipesBySearch';

function* rootSaga() {
  yield all([
    watchGetRecipesByCategory(),
    watchGetNextRecipesByCategory(),
    watchGetRecipeInformationById(),
    watchGetRecipesBySearch(),
    watchGetNextRecipesBySearch()
  ]);
}

export default rootSaga;
