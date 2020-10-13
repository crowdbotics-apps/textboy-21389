import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* signup_post_api_v1_signup_createWorker(action) {
  try {
    const result = yield call(
      apiService.signup_post_api_v1_signup_create,
      action
    )
    yield put(actions.signup_post_api_v1_signup_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.signup_post_api_v1_signup_createFailed(err, action))
  }
}
function* signup_post_api_v1_signup_createWatcher() {
  yield takeEvery(
    types.SIGNUP_POST_API_V1_SIGNUP_CREATE,
    signup_post_api_v1_signup_createWorker
  )
}
export default function* rootSaga() {
  const sagas = [signup_post_api_v1_signup_createWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
