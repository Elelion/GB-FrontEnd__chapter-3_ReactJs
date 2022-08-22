import React from "react";
import classes from "./Message.module.css";

class Message extends React.Component {
  handleMessageClick = () => {
    console.log('click handle');
  }

  /**/

  render() {
    // деструктуризацию можно сделать так
    // const {text, myString} = this.props;

    return (
      <div  className={classes.messageWrapper}>
        <h3>Message component</h3>
        <p>author: {this.props.author}</p>
        <p>props: {this.props.text}</p>
        <p>my str: {this.props.myString}</p>
        <p onClick={this.handleMessageClick}>click me</p>
      </div>
    )
  }
}

export default Message;
