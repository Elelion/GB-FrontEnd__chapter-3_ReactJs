import {useState} from "react";

const Counter = () => {
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

export default Counter;
