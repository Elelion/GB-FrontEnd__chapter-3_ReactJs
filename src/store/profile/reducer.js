/**
 * для установки Redux пишем:
 * npm i redux react-redux
 */
import {
  CHANGE_CHECK_BOX_STATUS,
  CHANGE_NAME,
  CHANGE_SHOW_NAME
} from "./actions";

const initialState = {
  name: 'Default name',
  showName: false,
  checkBox: false,
}


/**
 * reducer - всегда должен работать с копиями (...state) тк он должен возвращать
 * только чистые значения (не мутированные)
 */
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SHOW_NAME: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case CHANGE_CHECK_BOX_STATUS: {
      return {
        ...state,
        checkBox: !state.checkBox,
      }
    }

    default:
      return state;
  }
}

/**
 * для отладки используем Redux-DevTool
 * о нем подробнее написано в store.js
 */