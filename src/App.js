import logo from './logo.svg';
import './App.css';
import MessageList from "./components/MessageList/MessageList";
import Counter from "./components/Counter/Counter";
import {useState, useEffect} from "react";
import Form from "./components/Form/Form";
import {AUTHORS} from "./components/constants";

function App() {
  const initialMessageState = [
    { message: 'msg1', author: 'Alex' },
    { message: 'msg2', author: 'Ben' },
  ];

  const [messageList, setMessageList] = useState(initialMessageState);

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author
    }

    setMessageList((prevMessageList) => [
      ...prevMessageList, newMsg
    ]);
  }

  /**
   * НЕ надо использовать .push для работы с state, тк push будет мутировать
   * наш state
   */
  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  }

  // консолим последний елемент массива с сообщениями
  useEffect(() => {
    let timeout;

    /**
     * ? - это условие, которое проверяет на null / undefined. Как это работает ?
     * ЕСЛИ с ЛЕВА от ? будет null / undefined то с ПРАВА от ? - не чего
     * не выполнится
     */
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        sendMessage('Hello, im a bot', AUTHORS.BOT);
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
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <MessageList messages={messageList}/>
        <Counter />
        <Form onSubmitEvent={handleAddMessage} />
      </header>
    </div>
  );
}

export default App;

// 34