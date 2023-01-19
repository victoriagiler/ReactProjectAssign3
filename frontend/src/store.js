import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer } from './reducers/eventReducers'


const rootReducer = combineReducers({
  eventList: eventListReducer,


})

const store = configureStore({
  reducer: {rootReducer},
  preloadedState:{},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})

export default store 