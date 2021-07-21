import { all } from 'redux-saga/effects'
import { watchGetNextRecipesByCategory } from './getNextRecipesByCategory'
import { watchGetRecipeInformationById } from './getRecipeInformationById'
import { watchGetRecipesByCategory } from './getRecipesByCategory'

function* rootSaga() {
  yield all([
    watchGetRecipesByCategory(),
    watchGetNextRecipesByCategory(),
    watchGetRecipeInformationById(),
  ])
}

export default rootSaga
