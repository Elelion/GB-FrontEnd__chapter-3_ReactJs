import React from "react";
import {useState} from "react";
import Button from "../Button/Button";

const CounterFunction = () => {
  // const countState = useState(0);
  // const count = countState[0];
  // const setCount = countState[1];

  /**
   * хук useState - Он объявляет «переменную состояния» аналогично:
   *
   * ...
   * constructor(props) {
   *  super(props);
   *  this.state = {
   *   count: 0
   *  };
   * }
   * ...
   *
   * Если новое состояние вычисляется с использованием предыдущего состояния,
   * вы можете передать функцию в setState. Функция получит предыдущее
   * значение и вернёт обновлённое значение.
   *
   * Поскольку в нашем примере отслеживается количество сделанных
   * пользователем кликов, мы передаём 0 в качестве исходного значения
   * переменной. (Если нам нужно было бы хранить два разных значения в
   * состоянии, то пришлось бы вызвать useState() дважды.)
   *
   * https://ru.reactjs.org/docs/hooks-state.html
   */

  /**
   * дестроктуризация массивов
   * Первый элемент обозначает текущее значение, а второй является функцией,
   * позволяющей менять это значение. Доступ к элементам через [0] и [1] менее
   * ясен, потому что индексы лишены осмысленных имён.
   */
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Counter: {count}</p>

      <button onClick={() => setCount(0)}>Сбросить</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

/**/

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      showButton: true,
      timer: 10,
      buttonStatus: false,
    };
  };

  updateCountAdd = () => {
    /**
     * В setState мы можем вызвать так же и ф-цию,
     * вызваем ф-цию предыдущего состояния (prevState), те это будет значение
     * которое было на 100% правильно ДО момента изменения состояния
     *
     * Это надо когда мы вычислем новое состояние на основе прыдудещего
     * всегда надо так делать. Тк все изменения в React асинхронны.
     *
     * ---
     *
     * так же есть еще второй НЕ обязательный аргумент в изменении сотоянии,
     * это callBack , который выполняется после завершения изменения состояния
     *
     */
    this.setState(prevState => ({count: prevState.count + 1}), () => {
      console.log('count: ' + this.state.count)
    });
  };

  updateCountSub = () => {
    if (this.state.count >= 1) {
      this.setState({count: this.state.count - 1});
    }
  };

  resetCount = () => {
    this.setState({count: 0});
  };

  toggleButton = () => {
    /**
     * меняем состояние, логика звучит как - меняем текущее состояние
     * на НЕ предыдущее состояние. те если false, будет true и на оборот
     */
    this.setState(prevState => ({showButton: !prevState.showButton}))
  };

  /**
   * используется когда компонент уже отрендерен и находится в DOM
   */
  componentDidMount() {
    console.log('componentDidMount');

    /**
     * Задачка:
     * что будет на выходе ?
     *
     * Ответ:
     * результатом всегда будет последнее число, НО если интерплитатор дойдет
     * до false, то после него присвоения остановятся и конечным результатом
     * будет всегда false
     */
    let foo = true && 4 && false && 1;
    console.log('foo from counter ... && ...: ' + foo)

    this.countBackCounter();
  }

  /**
   * используется когда уже компонент обновился НО еще не отрендерился
   * будет срабатывать при каждом событии таймера в методе countBackCounter
   * по этому комментируем это дело...
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('componentDidUpdate', prevProps, prevState);
  }

  /**
   * используется на этапе размонтирования, те компонент был, а потом исчез
   */
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  /**
   * возвраает копию объекта, измененную на основании полученных props
   * подробнее тут:
   * https://ru.reactjs.org/docs/react-component.html#static-getderivedstatefromprops
   */
  static getDerivedStateFromProps(props, state) {
    return {
      // используется очень крайне редко
    }
  }

  countBackCounter() {
    let timerCounter = setInterval(() => {
      if (this.state.timer <= 1) {
        this.setState({buttonStatus: true});
        clearInterval(timerCounter);
      }

      this.setState({timer: this.state.timer - 1})
    }, 1000);
  }

  /**/

  render() {
    return (
      // <> - это называется фрагмент, нужно для объеденения елементов в 1ин
      <>
        <p>Counter: {this.state.count}</p>

        <Button
          onClickEvent={this.resetCount}
          title='Сбросить'
          status={this.state.buttonStatus}
          timer={this.state.timer}
        />
        <Button
          onClickEvent={this.updateCountSub}
          title='-'
          status={this.state.buttonStatus}
          timer={this.state.timer}
        />
        <Button
          onClickEvent={this.updateCountAdd}
          title='+'
          status={this.state.buttonStatus}
          timer={this.state.timer}
        />

        <button onClick={this.toggleButton}>
          Btn toggle: <b>{this.state.showButton === true ? 'true' : 'false'}</b>
        </button>
      </>
    )
  }
}

export default Counter;
