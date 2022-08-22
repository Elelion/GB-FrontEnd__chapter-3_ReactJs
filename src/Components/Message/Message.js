import React from "react";
import classes from "./Message.module.css";
import PropTypes from 'prop-types';

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
        <h4>id: {this.props.id}</h4>
        <p>author: {this.props.author}</p>
        <p>props: {this.props.text}</p>
        <p>my str: {this.props.myString}</p>
        <p onClick={this.handleMessageClick}>click me</p>
      </div>
    )
  }
}

/**
 * для типизации как правило используется TS, но мы рассмотрим propTypes
 * npm i prop-types
 *
 * и после этого задаем типизацию данных
 * если будет ошибка - то она вывеится в консоль
 */
Message.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  author: PropTypes.string.isRequired,
}

export default Message;
