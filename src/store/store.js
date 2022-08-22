import {profileReducer} from "./profile/profileReducer";
import {createStore} from "redux";

/**
 * создаем тем самым store
 * в стор мы пихаем наш profileReducer
 */
export const store = createStore(
  profileReducer,

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