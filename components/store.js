import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";
//imported root reducer and root saga
import rootReducer from "./reducers/root.reducer";
import rootSaga from "./sagas/root.saga";
//create saga midleware
const sagaMiddleware = createSagaMiddleware();
//store
let store;
//initial state
const initialState = {
  lastUpdate: 12,
  light: false,
  count: 100,
};

function initStore(initialState) {
  //create store
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  //run root saga
  sagaMiddleware.run(rootSaga);
  return store;
}
