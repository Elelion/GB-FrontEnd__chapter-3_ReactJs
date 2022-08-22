import {profileReducer} from "./profile/reducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {messagesReducer} from "./messages/reducer";
import thunk from "redux-thunk";

// добавляем для работы с расширением ReduxDevTools
const devToolsForExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/**
 * combineReducers - запихнет все в одну большую ф-цию и будет выдавать нам
 * результат в удобно читаемом виде
 */
const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
})

/**
 * создаем тем самым store
 * в стор мы пихаем наш profileReducer итп
 */
export const store = createStore(
  rootReducer,
  devToolsForExtension,

  // добавляем middleware
  applyMiddleware(thunk),
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