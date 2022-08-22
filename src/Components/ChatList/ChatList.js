import {List, ListItem} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";

export const ChatList = () => {
  const chats = [
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
  ]

  const [chatList, setChatList] = useState(chats);

  const deleteChat = (idToDelete) => {
    const newChatList = {...chatList}

    // delete - мутирует объект с которым мы взаимодействуем
    delete newChatList[idToDelete];
    console.log(chatList);
    setChatList(newChatList);
    console.log(chatList);
  }

  return (
    <List>
      {chats.map((chat) => (
        <ListItem key={chat.id}>
          <Link to={`/chats/${chat.id}`}>{chat.name}</Link>

          <div
            onClick={() => deleteChat(chat.id)}
            style={{marginLeft: '10px', cursor: 'pointer'}}
          >
            del
          </div>
        </ListItem>
      ))}
    </List>
  )
}
