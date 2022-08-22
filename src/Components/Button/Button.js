import React, {useEffect, useState, useCallback} from "react";
import {Button} from "@mui/material";

const Btn = (props) => {
  const [count, setCount] = useState(0);

  /**
   * будет запущен после того как render будет выполнен
   * те код что ниже закоментирован, отработает лишь единожды
   * по этому мы его переносим в нашу якобы контейнерную компоненту Counter.js
   *
   * в массив с низу мы передаем переменную, на ее состоянии будет происходить
   * наше событие
   */
  useEffect(() => {
    /*
    return () => {
      let timerCounter = setInterval(() => {
        if (timer <= 1) {
          status = true;
          clearInterval(timerCounter);
        }

        setState(timer - 1)
      }, 1000);
    };
    */
    console.log('useEffect...');
  }, []);

  /**
   * useCallback - Данный подход нужно использовать ЕСЛИ
   * 1 - мы передаем эту ф-цию пропсом в другую компоненту
   * 2 - мы используем эту ф-цию в других хуках
   */
  const _updateCount = useCallback(() => {
    console.log('before: ', count);
    setCount((prevCount) => prevCount + 1);
    }, [count],
  );

  useEffect(() => {
    console.log('after changed: ', count);
  }, [count]);

  /**/

  return (
    <>
      <Button
        variant="contained"

        disabled={props.status}
        onClick={props.onClickEvent}
      >
        <b>{props.title}</b> (осталось: {props.timer})
      </Button>

      {/*<button onClick={updateCount}>updateCount</button>*/}
    </>
  )
}


/**
 * так бы выглядел вариант с классом
 * НО не правильно делать элементы классовыми, тк классовыми могут быть толко
 * обертки, и все вычисления должны происходить там же, а в иделае не там а в
 * стейте, которого пока у нас нет
 */
class _Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 15,
      disabled: false,
    }

    console.log('Button constructor');
  }

  componentDidMount() {
    console.log('Button component DidMount');

    let timerCounter = setInterval(() => {
      if (this.state.timer <= 1) {
        this.setState({disabled: true});
        clearInterval(timerCounter);
      }

      this.setState({timer: this.state.timer - 1})
    }, 1000);
  };

  render() {
    return (
      <button
        disabled={this.state.disabled}
        onClick={this.props.onClickEvent}
      >
        <b>{this.props.title}</b> (осталось: {this.state.timer})
      </button>
    )
  }
}

export default Btn;

/**/

// задаем инлайновые стили для корректировок
const useStyles = ({
  button: {
    height: 60,
  },
});

export const ButtonWithImage = ({src, onClick, className='none'}) => {
  return (
    <Button variant="contained" onClick={onClick}>
      <img
        src={src}
        alt="ButtonImg"
        width="70px"
        className={className}
        style={useStyles.button}/>
    </Button>
  )
}

export const ButtonWithText = ({text, onClick}) => {
  return (
    <Button variant="contained" onClick={onClick}>
      <span>{text}</span>
    </Button>
  )
}

export const ButtonWithElement = ({element, onClick}) => {
  return (
    <div onClick={onClick}>
      {element}
    </div>
  )
}

/**
 * children - название props которое устанавливается React
 * позволяет между тегами <ButtonChildren></ButtonChildren> размещать
 * HTML код
 */
export const ButtonChildren = ({children, onClick}) => {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  )
}
