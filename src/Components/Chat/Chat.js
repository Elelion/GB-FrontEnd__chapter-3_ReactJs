import MessageList from "../MessageList/MessageList";
import FormMaterialUI, {FormWithLogger} from "../FormMaterialUI/FormMaterialUI";
import {useEffect, useState} from "react";
import {AUTHORS} from "../helpers/constants";
import {Navigate, useParams} from "react-router-dom";

export const Chat = (props) => {
  /**
   * useParams - принимает параметры, которые мы передаем в нашем URL,
   * ChatsList -> <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
   * и которые потом поступают к нам через URL в
   * Router -> <Route exact path='/chats/:id' element={<Chat />} />
   * в данном случае мы передаем только ID, значит и получим только ID
   */
  const chatId = useParams();

  // консолим последний елемент массива с сообщениями
  useEffect(() => {
    let timeout;

    /**
     * ? - это условие, которое проверяет на null / undefined. Как это работает ?
     * ЕСЛИ с ЛЕВА от ? будет null / undefined то с ПРАВА от ? - не чего
     * не выполнится
     */
    if (props.messageList[props.messageList.length - 1]?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        props.sendMessage('Hello, im a bot', AUTHORS.BOT);
      }, 2000)

      /**
       * удаляем наш setTimeout что бы не было не предвиденных утеченк памяти
       * а так же что бы не вызывались лишние методы для удаления
       *
       * оборачиваем clearTimeout в return () => {...} тк если НЕ обернуть, то
       * clearTimeout выполнится сразу же.
       */
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [props.messageList]);

  if (!props.messageList[chatId.id - 1]) {
    // Navigate - редирект, replace - заменить текущий маршрут
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <div>
        <MessageList messages={props.messageList} chatId={chatId.id} /*messageColor={props.messageColor}*/ />
      </div>

      {/*<Form onSubmitEvent={handleAddMessage} />*/}

      {/*меняем нашу форму на форму с логером*/}
      {/*<FormMaterialUI onSubmitEvent={handleAddMessage} />*/}

      <FormWithLogger onSubmitEvent={props.handleAddMessage} />
    </>
  )
}
