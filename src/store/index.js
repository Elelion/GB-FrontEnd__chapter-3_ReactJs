import { createStore, combineReducers, applyMiddleware } from "redux";
import ConditionReducer from "./ConditionReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ChatReducer from "./ChatReducer";
import MessageReducer from "./MessageReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["Chats"],
};

const rootReducer = combineReducers({
  ConditionReducer,
  ChatReducer,
  MessageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
