import {List} from "@mui/material";
import {ChatItem} from "./ChatItem";

export const ChatList = (props) => {
  return (
    <List>
      {props.chatList.map((chat) => (
        <ChatItem {...props} chat={chat} />
      ))}
    </List>
  )
}
