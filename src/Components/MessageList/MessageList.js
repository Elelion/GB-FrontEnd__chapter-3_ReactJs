import Message from "../Message/Message";
import {useEffect} from "react";

/**/

const MessageList = (props) => {

  /**
   * эффект будет срабатывать при монтировании и демонтировании елемента
   * тк мы не указали [deps]
   */
  useEffect(() => {
    console.log('MsgList mounted...');

    return () => {
      console.log('MsgList UN_mounted');
    };
  }, []);

  /**/

  return (
    props.messages.map((obj, index) => {
      if (obj.id === Number(props.chatId)) {
        return (
          <Message
            id={obj.id}
            text={obj.message}
            // text={undefined}
            author={obj.author}
            myString="it's my string"
            key={index}
            // messageColor={props.messageColor}
          />
        )
      }
    })
  )
}

export default MessageList;
