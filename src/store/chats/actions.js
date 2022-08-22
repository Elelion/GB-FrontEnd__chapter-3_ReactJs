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