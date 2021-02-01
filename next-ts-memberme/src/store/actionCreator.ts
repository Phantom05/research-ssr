// import { createAction } from "redux-actions";
// import { bindActionCreators } from "redux";
// import * as actions from "~/store/actions";
// import store from "~/store";

// export const { dispatch } = store;
// export const {dispatch} = configureStore;
// export const Actions = bindActionCreators(actions, dispatch);

// export function makeActionCreator(actionType, payload) {
//   return store.dispatch({ type: actionType, payload: payload });
// }

// export function makeAsyncCreateActions(actions) {
//   // const ActionsFunction = (payload) => createAction(actions.INDEX, payload);
//   const ActionsFunction = createAction(actions.INDEX)
//   return (api) => {
//     if (typeof api !== "function") new Error("api must be Function");
//     ActionsFunction.index = actions.INDEX;
//     ActionsFunction.request = (data) => api(data);
//     ActionsFunction.pending = (payload) => createAction(actions.PENDING, payload);
//     ActionsFunction.success = (payload) => createAction(actions.SUCCESS, payload);
//     ActionsFunction.failure = (payload) => createAction(actions.FAILURE, payload);
//     return ActionsFunction;
//   };
// }

// export function makeAsyncCreateActions(actions) {
//   const ActionsFunction = (payload) => makeActionCreator(actions.INDEX, payload);
//   return (api) => {
//     if (typeof api !== "function") new Error("api must be Function");
//     ActionsFunction.index = actions.INDEX;
//     ActionsFunction.request = (data) => api(data);
//     ActionsFunction.pending = (payload) => makeActionCreator(actions.PENDING, payload);
//     ActionsFunction.success = (payload) => makeActionCreator(actions.SUCCESS, payload);
//     ActionsFunction.failure = (payload) => makeActionCreator(actions.FAILURE, payload);
//     return ActionsFunction;
//   };
// }
