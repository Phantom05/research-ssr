import { createAction } from "redux-actions";
import * as API from "~/lib/api";

export function makeActionPrefix(prefix: any) {
  return {
    INDEX: prefix,
    INIT: prefix + "_INIT",
    REQUEST: prefix + "_REQUEST",
    PENDING: prefix + "_PENDING",
    SUCCESS: prefix + "_SUCCESS",
    FAILURE: prefix + "_FAILURE",
  };
}

export function makeSagaActions(types: any) {
  return function (api: any) {
    return {
      request: (data: any) => api(data),
      index: createAction(types.INDEX),
      init: createAction(types.INIT),
      pending: createAction(types.PENDING),
      success: createAction(types.SUCCESS),
      failure: createAction(types.FAILURE),
    };
  };
}

// NOTE: sagas

export const SAGA_TEST = makeActionPrefix("SAGA_TEST");
export const saga_test = makeSagaActions(SAGA_TEST)(API.getUserApi);

// export const COUNT_PLUS = "COUNT_PLUS";
// export const COUNT_MINUS = "COUNT_MINUS";
// export const COUNT_SET_PLUS = "COUNT_SET_PLUS";
// export const COUNT_SET_MINUS = "COUNT_SET_MINUS";

// export const countPlusAction = createAction(COUNT_PLUS);
// export const countMinusAction = createAction(COUNT_MINUS);
// export const countSetPlusAction = createAction(COUNT_SET_PLUS);
// export const countSetMinusAction = createAction(COUNT_SET_MINUS);

// export const SAGA_TEST = "SAGA_TEST";
// export const SAGA_TEST_INIT = "SAGA_TEST_INIT";
// export const SAGA_TEST_PENDING = "SAGA_TEST_PENDING";
// export const SAGA_TEST_SUCCESS = "SAGA_TEST_SUCCESS";
// export const SAGA_TEST_FAILURE = "SAGA_TEST_FAILURE";

// export const saga_test = {
//   saga: createAction(SAGA_TEST.INDEX),
//   init: createAction(SAGA_TEST.INIT),
//   pending: createAction(SAGA_TEST.PENDING),
//   success: createAction(SAGA_TEST.SUCCESS),
//   failure: createAction(SAGA_TEST.FAILURE),
// };

// export const sagaTestAction = createAction(SAGA_TEST.INDEX);
// export const sagaTestAction_init = createAction(SAGA_TEST_INIT);
// export const sagaTestAction_pending = createAction(SAGA_TEST_PENDING);
// export const sagaTestAction_success = createAction(SAGA_TEST_SUCCESS);
// export const sagaTestAction_failure = createAction(SAGA_TEST_FAILURE);
// export const SAGA_TEST = makeActionPrefix("SATA_TEXT");
// export const saga_test = makeAsyncCreateActions(SAGA_TEST)(API.getUserApi);
