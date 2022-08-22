import Message from "../Message/Message";

/**/

const MessageList = (props) => {
  return (
    props.messages.map((obj, index) =>
      <Message
        text={obj.message}
        author={obj.author}
        myString="it's my string"
        key={index}
      />
    )
  )
}

export default MessageList;
