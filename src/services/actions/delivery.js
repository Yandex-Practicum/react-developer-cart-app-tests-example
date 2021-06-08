import { getDeliveryMethodsRequest } from '../fakeApi';

export const GET_DELIVERY_METHODS = 'GET_DELIVERY_METHODS';
export const GET_DELIVERY_METHODS_FAILED = 'GET_DELIVERY_METHODS_FAILED';
export const GET_DELIVERY_METHODS_SUCCESS = 'GET_DELIVERY_METHODS_SUCCESS';

export const SET_DELIVERY_METHOD = 'SET_DELIVERY_METHOD';
export const SET_DELIVERY_FORM_VALUE = 'SET_DELIVERY_FORM_VALUE';

export function getRecommendedItems() {
  return function(dispatch) {
    dispatch({
      type: GET_DELIVERY_METHODS
    });
    getDeliveryMethodsRequest().then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_DELIVERY_METHODS_SUCCESS,
          methods: res.data
        });
      } else {
        dispatch({
          type: GET_DELIVERY_METHODS_FAILED
        });
      }
    });
  };
}
