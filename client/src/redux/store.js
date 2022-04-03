import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import productReducer from './products';

//will add here
//middleware for cart storage

const rootReducer = combineReducers({
  product: productReducer,
});

//set pre-loaded state here
//for cart items

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
