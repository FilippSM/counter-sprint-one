import { configureStore } from "@reduxjs/toolkit";
import { setCounterReducer } from "../model/setCounter-reducer";
import { valuesReducer } from "../model/setValues-reducer";
import { appReducer } from "../model/count-slice";


// объединение reducer'ов с помощью combineReducers
/* const rootReducer = combineReducers({
  message: messageReducer,
  setCounter: setCounterReducer,
  values: valuesReducer,
  count: countReducer,
}); */

// создание store
export const store = configureStore({
  reducer: {
    setCounter: setCounterReducer,
    values: valuesReducer,
    app: appReducer,
  },
});

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>;
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch;

//for local LocalStorage
/* store.subscribe(() => {
  //localStorage.setItem('maxValue', JSON.stringify(store.getState())) 
  localStorage.setItem('maxValue', JSON.stringify(store.getState().values.maxValue))
}) */

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store;
