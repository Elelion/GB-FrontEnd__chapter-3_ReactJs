import logo from './logo.svg';
import './App.css';
import Message from "./components/Message/Message";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Message
          text="Hello Msg"
          myString="it's my string"
        />
        <Counter />
      </header>
    </div>
  );
}

export default App;
