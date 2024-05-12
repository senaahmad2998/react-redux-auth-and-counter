// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// const handleCounter = (state = initialState, action) => {
//   if (action.type === "Increment") {
//     return { ...state, counter: state.counter + 1 };
//   }

//   if (action.type === "Increase") {
//     return { ...state, counter: state.counter + action.amount };
//   }

//   if (action.type === "Decrement") {
//     return { ...state, counter: state.counter - 1 };
//   }

//   if (action.type === "Show") {
//     return { ...state, showCounter: !state.showCounter };
//   }

//   return state;
// };

// const store = createStore(handleCounter);

export default store;
