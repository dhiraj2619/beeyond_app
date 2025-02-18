import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import {ProductReducer} from './reducers/ProductReducer';
import {CartReducer} from './reducers/CartReducer';
import { NotificationReducer } from './reducers/NotificationReducer';

const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    notifications:NotificationReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default store;
