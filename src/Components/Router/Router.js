import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {ChatList} from "../ChatList/ChatList";
import {Chat} from "../Chat/Chat";
import {Profile} from "../Profile/Profile";
import {useState} from "react";
import {ThemeContext} from "../helpers/ThemeContext";

export const Router = () => {
  const [messageColor, setMessageColor] = useState('blue');

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

        <Route path="chats" element={<ChatList /> }/>
        <Route exact path='/chats/:id' element={<Chat /*messageColor={messageColor}*/ />} />

        {/**/}

        <Route path="profile" element={<Profile /*changeColor={setMessageColor}*/ />} />

        {/**/}

        {/* * - путь который не отновиться к указаным роутам, те которого нет */}
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  )
}
