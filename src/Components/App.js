import { Route, Switch, NavLink } from "react-router-dom";
import Chats from "./Chats/Chats";
import Main from "./Main/Main";
import NotFound from "./NotFound/NotFound";
import Profile from "./Profile/Profile";
import "../style.css";
import ChatInfo from "./ChatsInfo/ChatInfo";
import API from "./API/API";

function App() {

  /*

  // import {onAuthStateChanged} from "firebase/auth";
  // import {setAuth} from "store/scripts/saucelabs/saucelabs-api";

  useEffect(() => {
    const unSubscribe = onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    })

    return unSubscribe();
  }, []);
 */
  

  return (
    <div className="App">
      <div className="nav">
        <NavLink exact to="/">
          Home Page
        </NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/chats">Chats</NavLink>
        <NavLink to="/api">Harry Potter API</NavLink>
      </div>

      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/chats" component={Chats} />
        <Route path="/chats/:chat" component={ChatInfo} />
        <Route path="/api" component={API} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
