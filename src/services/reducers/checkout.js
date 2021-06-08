import {
  ORDER_CHECKOUT_FAILED,
  ORDER_CHECKOUT_REQUEST,
  ORDER_CHECKOUT_SUCCESS
} from '../actions/checkout';

const checkoutInitialState = {
  orderCheckoutFailed: false,
  order: null,
  orderCheckoutRequest: false
};

export const checkoutReducer = (state = checkoutInitialState, action) => {
  switch (action.type) {
    case ORDER_CHECKOUT_REQUEST: {
      return {
        ...state,
        orderCheckoutFailed: false,
        orderCheckoutRequest: true
      };
    }
    case ORDER_CHECKOUT_FAILED: {
      return {
        ...state,
        orderCheckoutFailed: true,
        orderCheckoutRequest: false
      };
    }
    case ORDER_CHECKOUT_SUCCESS: {
      return {
        ...state,
        order: action.order,
        orderCheckoutRequest: false
      };
    }
    default: {
      return state;
    }
  }
};
