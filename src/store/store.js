import { createStore } from "redux";
import reducers from "../reducers/reducers";
import { saveState } from "./localStorage";

// Create store
const store = createStore(reducers);

// After every updating state save it to local storage
store.subscribe(() => saveState(store.getState()));

export default store;
