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

  const handleDeleteChat = (idToDelete) => {
    const newChats = chatList.filter(chat => chat.id !== idToDelete);
    setChatList(newChats);

    /**
     * delete - мутирует объект с которым мы взаимодействуем, по этому
     * работать только с копией
     */
    // const newMessageList = {...chatList};
    // delete newMessageList[idToDelete];
    // setChatList(newMessageList);
  }

  return (
    <List>
      {chatList.map((chat) => (
        <ListItem key={chat.id}>
          <Link to={`/chats/${chat.id}`}>{chat.name}</Link>

          <div
            onClick={() => handleDeleteChat(chat.id)}
            style={{marginLeft: '10px', cursor: 'pointer'}}
          >
            del
          </div>
        </ListItem>
      ))}
    </List>
  )
}
