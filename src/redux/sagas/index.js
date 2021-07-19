import { all } from "redux-saga/effects"
import { watchGetRecipesByCategory } from "./mainPage"

function* rootSaga() {
  yield all([
    watchGetRecipesByCategory()
  ])
}

export default rootSaga