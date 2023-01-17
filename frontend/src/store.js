import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {},
  preloadedState:{},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})

export default store 