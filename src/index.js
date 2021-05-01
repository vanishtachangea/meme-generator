import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { fetchMemes } from "./actions";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log("dfd", store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
