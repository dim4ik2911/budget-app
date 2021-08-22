import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: 101,
      };
    default:
      return state;
  }
});

// returns the current state
// console.log(store.getState());

//renders when state updates
store.subscribe(() => {
  console.log(store.getState());
});

//unsubscribe to stop rendering
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
// increment the count
store.dispatch({
  type: "INCREMENT", //type is mandatory
  incrementBy: 5,
});
store.dispatch({
  type: "INCREMENT",
});

// unsubscribe();

store.dispatch({
  type: "RESET",
});
store.dispatch({
  type: "DECREMENT",
  decrementBy: 10,
});
store.dispatch({
  type: "DECREMENT",
});
store.dispatch({
  type: "SET",
  count: 101,
});
