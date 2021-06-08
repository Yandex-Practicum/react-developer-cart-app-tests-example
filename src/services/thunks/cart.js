import { getRecomendedItemsFailed, getRecomendedItemSuccess, getRecomendedItemsRequestAction, getItemsFailed, getItemsSuccess, getItemsRequestAction, applyPromoRequest, applyPromoSuccess, applyPromoFailed, } from '../actions'
import { getItemsRequest, getRecommendedItemsRequest, applyPromoCodeRequest } from '../fakeApi';

export function applyPromo(code) {
    return function(dispatch) {
      dispatch(applyPromoRequest(code));
      applyPromoCodeRequest(code).then(res => {
        if (res && res.success) {
          dispatch(applyPromoSuccess({ ...res, code }));
        } else {
          dispatch(applyPromoFailed());
        }
      });
    };
  }
  
  export function getItems() {
    return function(dispatch) {
      dispatch(getItemsRequestAction());
      getItemsRequest().then(res => {
        if (res && res.success) {
          dispatch(getItemsSuccess(res.data));
        } else {
          dispatch(getItemsFailed());
        }
      });
    };
  }
  
  export function getRecommendedItems() {
    return function(dispatch) {
      dispatch(getRecomendedItemsRequestAction());
      getRecommendedItemsRequest().then(res => {
        if (res && res.success) {
          dispatch(getRecomendedItemSuccess(res.data));
        } else {
          dispatch(getRecomendedItemsFailed());
        }
      });
    };
  }
  