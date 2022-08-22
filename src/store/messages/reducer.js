import {ADD_CHAT, ADD_MESSAGE, DELETE_CHAT} from "./actions";

const initialState = [
  { id: 1, name: 'Chat 1', message: 'msg1', author: 'autoName' },
  { id: 2, name: 'Chat 2', message: 'msg2', author: 'Ben' },

  { id: 3, name: 'Chat 3', message: 'msg3', author: 'Alexander' },
  { id: 4, name: 'Chat 3', message: 'msg4', author: 'Zoom' },

  { id: 5, name: 'Chat 4', message: 'msg5', author: 'Bom' },
];

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      console.log('-------------+------------')
      console.log(action.payload)

      return [...state, {
        id: action.payload.id,
        author: action.payload.author,
        message: action.payload.message,
        name: action.payload.name,
      }]
    }

    case ADD_CHAT: {
      return [...state, {
        id: action.payload.id,
        author: action.payload.author,
        message: action.payload.message,
      }]
    }

    case DELETE_CHAT: {
      // const newMsgs = {...state};
      // delete newMsgs[action.payload];

      // return newMsgs;

      /**/

      return state.filter(({id}) => id !== action.id)
    }

    default:
      return state;
  }
}
