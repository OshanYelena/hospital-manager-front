import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import presistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

// import { loadState, saveState } from './localStorage';

// import throttle from 'lodash.throttle';

const presistConfig = {
  key: "main-root",
  storage,
  timeout: null,
};

const presistedReducer = persistReducer(presistConfig, rootReducer);

const store = createStore(presistedReducer, applyMiddleware(thunk));
export default store;
export const presistor = presistStore(store);


