import { legacy_createStore as createStore, create } from "redux";
import rootReducer from "../reducers/root.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = () => createStore(rootReducer, composeWithDevTools());

export default store;
