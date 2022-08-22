import {profileReducer} from "./profile/reducer";
import {chatReducer} from "./chats/reducer";
import {createStore, combineReducers} from "redux";

/**
 * combineReducers - запихнет все в одну большую ф-цию и будет выдавать нам
 * результат в удобно читаемом виде
 */
const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatReducer,
})

/**
 * создаем тем самым store
 * в стор мы пихаем наш profileReducer итп
 */
export const store = createStore(
  rootReducer,

  // добавляем для работы с расширением ReduxDevTools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * для работы с React и его отладки так же испольузется Redux-DevTool
 * это расширение для браухера Хром,
 *
 * руководство тут
 *
 * https://github.com/reduxjs/redux-devtools/tree/main/extension
 *
 * далее заходим в режим разработчика в хроме и где вкладки
 * elements, console... выбираем Redux
 */