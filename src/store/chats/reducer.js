import {
  ADD_CHAT,
  DELETE_CHAT
} from "./actions";

const initialState = [
  {
    id: 1,
    name: 'Chat 1',
    author: 'autoName',
    message: 'hello world',
  },
  {
    id: 2,
    name: 'Chat 2',
    author: 'autoName',
    message: 'hello piece',
  },
  {
    id: 3,
    name: 'Chat 3',
    author: 'autoName',
    message: 'hello sky',
  }
];

/**
 * action - ф-ция возвращающая объект
 */
export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      console.log(state);
      console.log('+++')
      return [...state, {
        id: action.payload.id,
        author: action.payload.author,
        message: action.payload.message,
      }]
    }

    case DELETE_CHAT: {
      return state.filter(({id}) => id !== action.id)
    }

    default:
      return state;
  }
}
