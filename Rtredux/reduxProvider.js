// state
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

const initialState = {
  count: 0,
};
const initialStatep = {
  countp: 0,
};
const inialvalue = {
  value: "UNSELECTED",
};
// Action

export const IncreamentCount = () => {
  return {
    type: "INCREAMENT_COUNT",
  };
};
export const DecreamentCount = () => {
  // this is action

  return {
    type: "DECREAMENT_COUNT", // type of action
  };
};
export const IncreamentCountp = () => {
  return {
    type: "INCREAMENT_COUNTP",
  };
};
export const DecreamentCountp = () => {
  // this is action

  return {
    type: "DECREAMENT_COUNTP", // type of action
  };
};

export const selected = () => {
  return {
    type: "SELECTED",
  };
};
export const unselected = () => {
  return {
    type: "UNSELECTED",
  };
};

// create reducer

const counter = (state1 = initialState, action) => {
  switch (action.type) {
    case "INCREAMENT_COUNT":
      return {
        ...state1,
        count: state1.count + 1,
      };
      break;
    case "DECREAMENT_COUNT":
      return {
        ...state1,
        count: state1.count - 1,
      };
      break;

    default:
      return state1;
      break;
  }
};
const getselection = (state = inialvalue, action) => {
  switch (action.type) {
    case "SELECTED":
      return {
        state,
        value: "SELECTED",
      };
      break;
    case "UNSELECTED":
      return {
        state,
        value: "UNSELECTED",
      };
      break;
    default:
      {
        return state;
      }
      break;
  }

  // return state;
};
const counterPizza = (state = initialStatep, action) => {
  switch (action.type) {
    case "INCREAMENT_COUNTP":
      return {
        ...state,
        countp: state.countp + 1,
      };
      break;
    case "DECREAMENT_COUNTP":
      return {
        ...state,
        countp: state.countp - 1,
      };
      break;
    default:
      return state;
      break;
  }
};

// root reducer

const rootReducer = combineReducers({
  counter,
  counterPizza,
  getselection,
});

// apply persistent congig

const persistconfig = {
  key: "root",
  storage: AsyncStorage,
};

// persist reducer

const persistreducer = persistReducer(persistconfig, rootReducer);

// redux store

export default () => {
  //   let reduxStore = createStore(rootReducer);
  //   return { reduxStore };
  let reduxStore = createStore(persistreducer);
  let persister = persistStore(reduxStore);
  return { reduxStore, persister };
};
