import {FETCH_PRODUCTS_SUCCESS} from '../constants/ProductConstant';
import {ProductData} from '../data/productsData';

export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: ProductData,
  };
};
