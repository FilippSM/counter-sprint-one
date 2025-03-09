import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { messageReducer } from '../model/message-reducer'
import { setCounterReducer } from '../model/setCounter-reducer'
import { valuesReducer } from '../model/setValues-reducer'
import { countReducer } from '../model/count-reducer'

 
// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
/*   tasks: tasksReducer,
  todolists: todolistsReducer, */
  message: messageReducer,
  setCounter: setCounterReducer,
  values: valuesReducer,
  count: countReducer,
})
 
// создание store
export const store = configureStore({
  reducer: rootReducer,
})
 
// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch
 
// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store