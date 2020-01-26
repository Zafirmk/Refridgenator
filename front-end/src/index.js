import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Container from "typedi";

import Home from "./home/home.layout";
import * as serviceWorker from "./serviceWorker";
import Redux from "./helpers/redux";

const redux = Container.get(Redux);
const store = createStore(redux.rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <body style={{ backgroundColor: "#F5F5F5", margin: 0 }}>
    <Provider store={store}>
      <Home />
    </Provider>
  </body>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
