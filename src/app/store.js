import { configureStore, combineReducers } from '@reduxjs/toolkit'
import displayReducer from '../features/display/displaySlice'

const rootReducer = combineReducers({
  display: displayReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export const setupStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export default store
