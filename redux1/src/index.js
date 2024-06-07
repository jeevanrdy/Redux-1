import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";


let initialStore = {
  bollyActors: [],
  tollyActors: [],
  cricketers: [],
};

let reducer = (updatedStore = initialStore, dispachedObj) => {
  console.log(dispachedObj);
  if (dispachedObj.type === "addBollyActors") {
    return {
      ...updatedStore,
      bollyActors: updatedStore.bollyActors.concat([dispachedObj.data]),
    };
  } else if (dispachedObj.type === "addTollyActors") {
    return {
      ...updatedStore,
      tollyActors: updatedStore.tollyActors.concat([dispachedObj.data]),
    };
  } else if (dispachedObj.type === "addCricketers") {
    return {
      ...updatedStore,
      cricketers: updatedStore.cricketers.concat([dispachedObj.data]),
    };
  }
  return updatedStore;
};

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
