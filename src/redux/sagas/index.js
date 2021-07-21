import { all } from 'redux-saga/effects'
import { watchGetNextRecipesByCategory } from './getNextRecipesByCategory'
import { watchGetRecipesByCategory } from './getRecipesByCategory'

function* rootSaga() {
  yield all([watchGetRecipesByCategory(), watchGetNextRecipesByCategory()])
}

export default rootSaga
