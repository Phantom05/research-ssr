import {
  all,
  fork,
  takeLatest,
  call,
  put,
  takeEvery,
} from "redux-saga/effects";
import * as actions from "~/store/actions";
import { getUserApi } from "~/lib/api";

/**
 * NOTE: saga test
 * @param {*} action
 */

function* handleTest(action: any) {
  console.log(action);
  yield put(actions.saga_test.pending());
  const payload = action.payload || {};
  // const { data } = yield call(getUserApi, payload);
  const { data } = yield call(actions.saga_test.request, payload);

  try {
    if (data) {
      // success
      yield put(actions.saga_test.success(data));
    } else {
      // failure
      yield put(actions.saga_test.failure());
    }
  } catch (e) {
    console.error(e);
    yield put(actions.saga_test.failure());
  }
}
export default function* userSaga() {
  yield all([takeEvery(actions.SAGA_TEST.INDEX, handleTest)]);
}
