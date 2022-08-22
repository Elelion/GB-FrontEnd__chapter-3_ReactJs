// export const Message = (props) => {

// можно так же писать и так
export const Message = ({ text, myString, handleMessageClick }) => {
  /**
   * взять из объекта props значение text и записать его в переменную text
   *
   * почему это будет работать ? Например
   * let name = 15;
   * let user = {
   *   name: name
   * }
   *
   * но мы можем написать просто let user = { name } и это будет работать так же как
   * и выше. Но почему это будет работать ? Потому что современный синтаксис
   * повзоляет так делать, тк мы создаем в объекте name а раз значение его НЕ указано
   * то мы говорим JS, что бы он поискал в окружении переменную с таким же именем
   * и автоматически подставил ее как значение в наш name
   *
   * это называется деструктуризация
   */
  // let text = {props}

  return (
    <>
      <h3>Message Text</h3>
      <p>props: {text}</p>
      <p>my str: {myString}</p>
      <p onClick={handleMessageClick}>click me</p>
    </>
  )
}
