import { Link, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@material-ui/core";
import "../../style.css";
import { useDispatch, useSelector } from "react-redux";
import { addChat, delChat } from "../../store/actions/chatsAction";
import ChatInfo from "../ChatsInfo/ChatInfo";
import { addNewMessage } from "../../store/actions/messageAction";

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

          <List>
            {chats.map((object, index) => (
              <ListItem key={index}>
                <ListItemButton>
                  <Link to={`/chats/${object.chatName}`}>
                    <ListItemText primary={object.name} />
                  </Link>
                  <button onClick={() => delChatHandler(object.id)}>
                    DELETE CHAT
                  </button>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Chats;
