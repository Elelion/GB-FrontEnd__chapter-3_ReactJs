import { Link, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@material-ui/core";
import "./chats.css";
import { useDispatch, useSelector } from "react-redux";
import { addChat, delChat, fetchChats } from "../../store/actions/chatsAction";
import ChatInfo from "../ChatsInfo/ChatInfo";
import {
  addNewMessage,
  fetchMessages,
} from "../../store/actions/messageAction";

const Chats = () => {
  const chats = useSelector((state) => state.ChatReducer);
  const dispatch = useDispatch();
  const [addNewChat, setAddNewChat] = useState("");

  const addNewChatHandler = (e) => {
    e.preventDefault();
    dispatch(
      addChat({
        id: chats.length,
        chatName: addNewChat,
        name: addNewChat,
      })
    );
    dispatch(
      addNewMessage({
        chatName: addNewChat,
        name: "Бот",
        text: `Приветствую вас в  новом чате ${addNewChat}`,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchChats());
    dispatch(fetchMessages());
  }, []);

  const delChatHandler = (id) => {
    dispatch(delChat(id));
  };

  return (
    <div>
      <form>
        <input
          placeholder="add new chat"
          value={addNewChat}
          onChange={(e) => setAddNewChat(e.target.value)}
        />
        <button type="submit" onClick={addNewChatHandler}>
          ADD NEW CHAT
        </button>
      </form>
      <div className="wrapper">
        <div className="chats">
          <Route path="/chats/:name" component={ChatInfo} />
          <Redirect to={"/chats"} />

          <ul>
            {chats?.map((object, index) => (
              <li key={index}>
                <ListItemButton>
                  <Link to={`/chats/${object.chatName}`}>
                    <ListItemText primary={object.name} />
                  </Link>
                  <button onClick={() => delChatHandler(object.id)}>
                    DELETE CHAT
                  </button>
                </ListItemButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chats;
