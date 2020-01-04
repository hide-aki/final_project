import * as CHECKOUT from '../constants/checkout';

const initState = {
  activeStep: 0,
  statusNextStep: false,
  numberOfSteps: 0,
  order: {
    personalData: {
      name: '',
      email: '',
      telephone: ''
    },
    delivery: {
      chooseDeliveryMethod: '',
      indexSelected: -1,
      deliveryMethod: '',
      selectedAddress: '',
      country: '',
      city: '',
      postal: '',
      street: '',
      houseNumber: ''
    },
    payment: {
      selectedMethodPayment: '',
      cardNumber: '',
      mm_yy: '',
      cvc: ''
    },
    totalSum: 0
  }
};

export default function(state = initState, action) {
  switch (action.type) {
    case CHECKOUT.CHANGE_STEP:
      return {
        ...state,
        activeStep: action.payload
      };

    case CHECKOUT.CHANGE_NEXT_STEP:
      return {
        ...state,
        statusNextStep: action.payload
      };

    case CHECKOUT.CHANGE_STEP_OF_LENGTH:
      return {
        ...state,
        numberOfSteps: action.payload
      };
    case CHECKOUT.SPECIFY_PERSONAL_DATA:
      return {
        ...state,
        order: {
          ...state.order,
          personalData: action.payload
        }
      };
    case CHECKOUT.SPECIFY_DELIVERY_DATA:
      return {
        ...state,
        order: {
          ...state.order,
          delivery: action.payload
        }
      };
    case CHECKOUT.SPECIFY_PAYMENT_DATA:
      return {
        ...state,
        order: {
          ...state.order,
          payment: action.payload
        }
      };
    default:
      return state;
  }
}