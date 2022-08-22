import {AUTHORS} from "../../components/helpers/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (id, name, author, newMsg) => ({
  type: ADD_MESSAGE,
  payload: {
    id,
    name,
    author,
    newMsg,
  },
})

/**/

/**
 * :: - производный разделитель, еще есть такие вариации: @@, ///
 *
 * action's - нужны для передачи действий, те тупо константы, которые потом
 * перебираются в switch что в reducer
 */
export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const DELETE_CHAT = 'CHAT::DELETE_CHAT';

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  id,
});

export const addChat = (id, author, message) => ({
  type: ADD_CHAT,
  payload: {
    id,
    author,
    message,
  },
});

/**/

/**
 * thunk нужны для того что бы выозвращать ф-ции
 * те все так же как и с actionCreators что выше, но только возвращаем
 * не объект а ф-ции
 */
export const addMessageWithThunk = (id, name, author, newMsg) => (dispatch, getState) => {
  dispatch(addMessage(id, name, author, newMsg));

  if (newMsg.author !== AUTHORS.BOT) {
    setTimeout(() => {
      const msgFromBot = {
        text: 'Hello, im a bot',
        author: AUTHORS.BOT,
        id: `${Date.now()}`,
      };

      dispatch(addMessage(id, '?', 'bot', msgFromBot))
    }, 1000)
  }

};
