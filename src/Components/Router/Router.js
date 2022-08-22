import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {ChatList} from "../ChatList/ChatList";
import {Chat} from "../Chat/Chat";
// import {Profile} from "../Profile/Profile";
import ConnectedProfile , {Profile} from "../Profile/Profile";
import {useState} from "react";
import {ThemeContext} from "../helpers/ThemeContext";
import {AUTHORS} from "../helpers/constants";
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../../store/chats/actions";

/**/

const initialChats = [
  {
    id: 1,
    name: 'Chat 1',
  },
  {
    id: 2,
    name: 'Chat 2',
  },
  {
    id: 3,
    name: 'Chat 3',
  }
];

/**
 * reduce - перебирающий метод, берет каждый елемент и позволяет выполнить над ним
 * какое то действие...
 * работает через callback, где первый елемент callback это аккумулятор, начальное
 * его состояние , второй елемент - сам елемент массива
 * те грубо говоря, пробежались по массиву и выполнили для каждого елемента
 * какую то операцию. Можно было сделать и через forEach, но лучше reduce тк не
 * будет наверняка мутации
 */
const _initialMessages = initialChats.reduce((acc, el) => {
  // аналогично acc.chat1 = []; acc.chat2 = [];...
  acc[el.id] = [];
  return acc;
}, {});

const initialMessages = [
  { id: 1, message: 'msg1', author: 'Alex' },
  { id: 2, message: 'msg2', author: 'Ben' },
  { id: 3, message: 'msg3', author: 'Pet' },
];

console.log('---');
console.log('reduce: ')
console.log(initialChats);
console.log(initialMessages);
console.log('...');

/**/

export const Router = () => {
  const [messageColor, setMessageColor] = useState('blue');

  /**
   * заменяем это на useSelector...
   * где указываем state, state - это обращение к нашему store.js, тк
   * он является же и state
   */
  // const [_chatList, setChatList] = useState(initialChats);
  // useSelector - хук, позволяющий получить данные из store
  const chatList = useSelector(state => state.chats);
  const dispatch = useDispatch();

  const [messageList, setMessageList] = useState(initialMessages);

  const handleDeleteChat = (idToDelete) => {
    // делаем через dispatch
    // const newChats = chatList.filter(chat => chat.id !== idToDelete);
    // setChatList(newChats);

    dispatch(deleteChat(idToDelete));

    /**
     * delete - мутирует объект с которым мы взаимодействуем, по этому
     * работать только с копией
     */
    // const newMessageList = {...chatList};
    // delete newMessageList[idToDelete];
    // setChatList(newMessageList);
  }

  /**/

  const sendMessage = (message, author) => {
    const newMsg = {
      message,
      author,
      id: messageList[messageList.length - 1].id + 1,
    }

    setMessageList((prevMessageList) => [
      ...prevMessageList, newMsg
    ]);

    /**/

    const newId = `${Date.now()}`;
    dispatch(addChat(newId, author, message))
  }

  /**
   * НЕ надо использовать .push для работы с state, тк push будет мутировать
   * наш state
   */
  const handleAddMessage = (message) => {
    sendMessage(message, AUTHORS.ME);
  }

  /**/

  return (
    /**
     * в Provider как правило заварачивается тот контент, которому требуются
     * как бы "общие" данные, что бы их не прокидывать через props
     * в value мы указываем данные которые мы хотим передавать минуя наши
     * промежуточные компоненты, те не надо больше так делать messageColor={messageColor}
     *
     * передавать можем и как значения так и ф-ции
     */
    <ThemeContext.Provider value={{messageColor, setMessageColor}}>
    {/*
     BrowserRouter - обрамляем все в этот тег, для маршрутизации
     Routes - оболочка для Route
     Route - собственно сама маршрутизация, она ТОЛЬКО следит за состоянием
     строки браузера, и как только она увидет совпадение, она автоматически
     запускает указанный рендер
     *
     говорим роуту что бы он отвечал за заданную компоненту component={...}
     path='/dialogs' - если путь = true, то отрисовываем компоненту component={...}
     path='/dialogs' - по сути прописываем правило для url
     *
     exact - задает строгое соответствие
     <Route exact path='/profile' element={<Profile />} />
    */}
    <BrowserRouter>

      {/*
      создаем ссылки, что бы мы могли перемещатся по средством Route
      Link принимает проп to, который указывает куда мы переходим

      Отличие Link от NavLink - Просто, Когда вы используете <Link>, в
      выбранном элементе нет активного класса.
      В отличие от этого, с <NavLink> выделенный элемент выделяется,
      потому что этот элемент добавляется активным классом.
      */}
      <NavLink
        to="/"
        style={({isActive}) => ({color: isActive ? "green" : "grey"})}
      >
        home link
      </NavLink>

      <Link to="/chats" style={{'color': 'white'}}>chats link</Link>
      <Link to="/profile" style={{'color': 'white'}}>profile</Link>

      {/**/}

      <Routes>
        <Route path="/" element={<Home />} />

        {/**/}

        {/*
        - если url = /chats , то...
        - ... мы отображаем компонент ChatList.
          index - означает начальный маршрут, те когда маршрут совпадает только
          с /chats
        - и если в url после /chats идут какие либо еще параметры,
          то мы указываем их тут, те это как /chat/id=...

        <Route index element={<ChatList />}/>
        */}

        <Route
          path="chats"
          element={<ChatList
            chatList={chatList}
            handleDeleteChat={handleDeleteChat}
          />}
        />
        <Route
          exact
          path='/chats/:id'
          element={<Chat
            sendMessage={sendMessage}
            messageList={messageList}
            handleAddMessage={handleAddMessage}
            /*messageColor={messageColor}*/
          />}
        />

        {/**/}

        {/*changeColor={setMessageColor} - надо закомментировать*/}
        {/*<Route path="profile" element={<Profile changeColor={setMessageColor} />} />*/}
        <Route path="profile" element={<ConnectedProfile />} />

        {/**/}

        {/* * - путь который не отновиться к указаным роутам, те которого нет */}
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  )
}
