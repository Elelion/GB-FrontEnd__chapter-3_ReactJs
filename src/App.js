import logo from './logo.svg';
import './App.css';
import MessageList from "./components/MessageList/MessageList";
import Counter from "./components/Counter/Counter";
import {useState, useEffect} from "react";
import {AUTHORS} from "./components/constants";
import FormMaterialUI from "./components/FormMaterialUI/FormMaterialUI";
import {
  ButtonChildren,
  ButtonWithElement,
  ButtonWithImage,
  ButtonWithText
} from "./components/Button/Button";
import {ButtonGroup} from "@mui/material";
import {Router} from "./components/Router/Router";

/**/

function App() {

  return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/**/}

        {/*
        обычный тернарник, toggle === false / true
        НО писать так - ОЧЕНЬ плохо, это плохо для производительности и в целом
        */}
        {/*
        <button
          onClick={() => {setToggle(prevState => !prevState)}}
        >
          Toggle Div / Sec
        </button>

        {toggle
          ? (<div>
              <MessageList messages={messageList}/>
            </div>)
          : (<section>
              <MessageList messages={messageList}/>
            </section>
          )}
        */}

        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <ButtonWithImage onClick={() => {  }} src={logo} className={'App-logo'}/>
          <ButtonWithText onClick={() => {  }} text={"hello"} />
          <ButtonWithElement onClick={() => {  }}
            element={<span style={{fontWeight: "bolder", color: "#61dafb"}}>Hello</span>}/>

          <ButtonChildren onClick={() => {  }}>
            <div>
              Children
            </div>
          </ButtonChildren>
        </ButtonGroup>

        {/**/}

        <Counter />


        {/**/}

        {/*
        если мы хотим обернуть в роуты наш App, то нужно сделать так:
          <BrowserRouter>
            <div className="App">
              ...
              создать компонент где будут наши линки <Link .../> типа NavBar

              а ниже описать маршруты
              <Routes>
                <Route path=... />
              </Routes>
            </div>
          <BrowserRouter>
        */}

        <Router />
      </header>
    </div>
  );
}

export default App;

// 20-30

/**
 * ставим Material UI
 * npm install @mui/material @emotion/react @emotion/styled
 */