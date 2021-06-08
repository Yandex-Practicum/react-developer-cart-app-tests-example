import { TAB_SWITCH, DELETE_ITEM, DECREASE_ITEM, INCREASE_ITEM, CANCEL_PROMO, APPLY_PROMO_REQUEST, APPLY_PROMO_SUCCESS, APPLY_PROMO_FAILED, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILED, GET_RECOMMENDED_ITEMS_REQUEST, GET_RECOMMENDED_ITEMS_SUCCESS, GET_RECOMMENDED_ITEMS_FAILED } from '../action-types'

export const applyPromoRequest = (code) => ({
  type: APPLY_PROMO_REQUEST,
  code
})
export const applyPromoSuccess = (value) => ({
  type: APPLY_PROMO_SUCCESS,
  value
})
export const applyPromoFailed = () => ({
  type: APPLY_PROMO_FAILED
})

export const getItemsRequestAction = () => ({
  type: GET_ITEMS_REQUEST
})

export const getItemsSuccess = (items) => ({
  type: GET_ITEMS_SUCCESS,
  items
})

export const getItemsFailed = () => ({
  type: GET_ITEMS_FAILED
})

export const getRecomendedItemsRequestAction = () => ({
  type: GET_RECOMMENDED_ITEMS_REQUEST
})

export const getRecomendedItemSuccess = (items) => ({
  type: GET_RECOMMENDED_ITEMS_SUCCESS,
  items
})

export const getRecomendedItemsFailed = () => ({
  type: GET_RECOMMENDED_ITEMS_FAILED
})

export const cancelPromo = () => ({ type: CANCEL_PROMO })

export const increaseItem = (id) => ({
  type: INCREASE_ITEM,
  id
})

export const decreaseItem = (id) => ({
  type: DECREASE_ITEM,
  id
})

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id
})

export const tabSwitch = () => ({ type: TAB_SWITCH })
