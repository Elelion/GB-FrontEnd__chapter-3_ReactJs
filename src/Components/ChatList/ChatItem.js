import {Link} from "react-router-dom";
import {ListItem} from "@mui/material";
import {DeleteButton} from "./DeleteButton";

export const ChatItem = (props) => {
  return (
    <ListItem key={props.chat.id}>
      <Link to={`/chats/${props.chat.id}`}>{props.chat.name}</Link>

      {/*выносим в отдельный компонент, что бы было красивее... */}
      {/*
      <div
        onClick={() => props.handleDeleteChat(props.chat.id)}
        style={{marginLeft: '10px', cursor: 'pointer'}}
      >
        del
      </div>
      */}

      <DeleteButton id={props.chat.id} onClick={props.handleDeleteChat}/>
    </ListItem>
  )
}