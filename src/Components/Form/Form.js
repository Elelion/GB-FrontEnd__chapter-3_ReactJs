import {useState} from "react"
import classes from "./form.module.css";

const Form = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

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
