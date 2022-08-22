import MessageList from "../MessageList/MessageList";
import FormMaterialUI, {FormWithLogger} from "../FormMaterialUI/FormMaterialUI";
import {useEffect, useState} from "react";
import {AUTHORS} from "../helpers/constants";
import {Navigate, useParams} from "react-router-dom";
import warning from "react-redux/es/utils/warning";
import {useDispatch, useSelector} from "react-redux";
import {selectMessages} from "../../store/messages/selectors";
import {func} from "prop-types";

export const Chat = (props) => {
  /**
   * useParams - принимает параметры, которые мы передаем в нашем URL,
   * ChatsList -> <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
   * и которые потом поступают к нам через URL в
   * Router -> <Route exact path='/chats/:id' element={<Chat />} />
   * в данном случае мы передаем только ID, значит и получим только ID
   */
  const chatId = useParams();
  const messageList = useSelector(selectMessages);

  // консолим последний елемент массива с сообщениями
  useEffect(() => {
    // let timeout;

    /**
     * ? - это условие, которое проверяет на null / undefined. Как это работает ?
     * ЕСЛИ с ЛЕВА от ? будет null / undefined то с ПРАВА от ? - не чего
     * не выполнится
     */
    // console.warn(props.messageList[props.messageList.length - 1].author)
    // console.warn(AUTHORS.ME)
    // if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
    //   timeout = setTimeout(() => {
    //     props.sendMessage('Hello, im a bot', AUTHORS.BOT);
    //   }, 2000)

      /**
       * удаляем наш setTimeout что бы не было не предвиденных утеченк памяти
       * а так же что бы не вызывались лишние методы для удаления
       *
       * оборачиваем clearTimeout в return () => {...} тк если НЕ обернуть, то
       * clearTimeout выполнится сразу же.
       */
      // return () => {
      //   clearTimeout(timeout)
      // }
    // }
  }, [messageList]);

  if (!messageList[chatId.id - 1]) {
    // Navigate - редирект, replace - заменить текущий маршрут
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <h1>Chat:{chatId.id}</h1>
      <div>

        {/*TODO: think about it*/}
        {/*{props.messageList.reduce(function(prev, curr) {*/}
        {/*  console.warn('----')*/}
        {/*  console.log(prev);*/}
        {/*  console.log(curr)*/}
        {/*})}*/}
        {/*{props.messageList.map((obj, index) => {*/}
        {/*  if (obj => prev === 1) {*/}
        {/*    */}
        {/*  }*/}
        {/*})}*/}

        <MessageList messages={messageList} chatId={chatId.id} /*messageColor={props.messageColor}*/ />
      </div>

      {/*<Form onSubmitEvent={handleAddMessage} />*/}

      {/*меняем нашу форму на форму с логером*/}
      {/*<FormMaterialUI onSubmitEvent={handleAddMessage} />*/}
      <FormWithLogger onSubmitEvent={props.handleAddMessage} />
    </>
  )
}

/**/

/**
 * middleware имеет синтаксис:
 * const middleware = store => next => action => { ... }
 *
 * это аналогично: (но так middleware работать НЕ будет!)
 * function middleware(store) {
 *   return function(next) {
 *     return function (action) {
 *       // ...
 *       return next(action);
 *     }
 *   }
 *  }
 */
