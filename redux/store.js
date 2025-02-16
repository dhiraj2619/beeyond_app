import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import {ProductReducer} from './reducers/ProductReducer';
import {CartReducer} from './reducers/CartReducer';

const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default store;
