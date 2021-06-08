import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { increaseItem, getItemsRequestAction, getItemsSuccess } from './actions'

const initStore = {
    step: 'cart',
    cart: {
      featured: [],
      postponed: [],
      items: [],
      itemsRequest: false,
      itemsFailed: false,
      recommendedItems: [],
      recommendedItemsRequest: false,
      recommendedItemsFailed: false,
      postponedItems: [],
      promoCode: '',
      promoDiscount: null,
      promoRequest: false,
      promoFailed: false,
      currentTab: 'items'
    },
    delivery: {
      deliveryMethods: [],
      deliveryMethodsRequest: false,
      deliveryMethodsFailed: false,
      selectedDeliveryId: null,
      deliveryForm: {
        name: '',
        phone: '',
        address: '',
        unitNumber: '',
        intercom: '',
        floor: ''
      }
    },
    checkout: {
      orderCheckoutFailed: false,
      order: null,
      orderCheckoutRequest: false
    }
  }

const sourceItems = [
    {
      id: 1,
      src: '/static/media/prod-1.945fea17.jpg',
      qty: 2,
      text: 'похожая на настоящую красный Мягкая приманка в виде червя силиконовый искусственный приманки рыбный запах креветок',
      price: 120
    },
    {
      id: 2,
      src: '/static/media/prod-2.9a2c7860.jpg',
      qty: 2,
      text: 'Умное кольцо из нержавеющей стали с датчиком температуры тела, модный дисплей',
      price: 450
    }
  ]

const resStoreWithItems = {
    ...initStore,
    cart: {...initStore.cart, items: sourceItems}
}

const resStoreWithIncreasedItem = {
    ...initStore,
    cart: {...initStore.cart, items: [{
        id: 1,
        src: '/static/media/prod-1.945fea17.jpg',
        qty: 3,
        text: 'похожая на настоящую красный Мягкая приманка в виде червя силиконовый искусственный приманки рыбный запах креветок',
        price: 120
      },
      {
        id: 2,
        src: '/static/media/prod-2.9a2c7860.jpg',
        qty: 2,
        text: 'Умное кольцо из нержавеющей стали с датчиком температуры тела, модный дисплей',
        price: 450
      }]}
}
describe('Проверка экшенов и редьюсеров', () => {
    const enhancer = applyMiddleware(thunk);
    const store = createStore(rootReducer, enhancer);
    it('Диспатчим экшен получения товаров и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch(getItemsSuccess(sourceItems))
        expect(getState()).toStrictEqual(resStoreWithItems)
    })
    it('Добавляем элементы и увеличиваем на 1 единицу количество', ()=>{
        const {getState} = store
        store.dispatch(getItemsSuccess(sourceItems))
        expect(getState()).toStrictEqual(resStoreWithItems)
        store.dispatch(increaseItem(1))
        expect(getState()).toStrictEqual(resStoreWithIncreasedItem)
    })
})