import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducers'
import { eventListReducer } from './reducers/eventReducers'


const rootReducer = combineReducers({
  eventList: eventListReducer,
  cart: cartReducer

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