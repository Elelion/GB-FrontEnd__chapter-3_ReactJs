import {useState} from "react"
import classes from "./form.module.css";

const Form = (props) => {
  const [value, setValue] = useState('');

  // через это мы присваиваем значение в нашу локальную value
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  /**
   * а тут мы передаем наше присвоенное значение value на верх в App тк там
   * идет передача ф-ции, которая НЕ вызывается и передает свой как бы контекст
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmitEvent(value);
    setValue("");
  }

  /**/

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        className={classes.input}
      />
      <input type="submit"/>
    </form>
  )
}

export default Form;
