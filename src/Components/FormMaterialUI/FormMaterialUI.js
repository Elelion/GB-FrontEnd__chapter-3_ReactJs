import {useEffect, useRef, useState} from "react"
import {TextField, Input} from "@mui/material";
import classes from "./FormMaterialUI.module.css";

const FormMaterialUI = (props) => {
  const [value, setValue] = useState('');

  /**
   * создаем привязку через ref (те делаем как бы ссылку)
   */
  const inputRef = useRef();

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmitEvent(value);
    setValue("");
  }

  useEffect(() => {
    inputRef.current?.focus();
    console.log(inputRef.current.value);
  }, []);
  

  /**/

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={value}
        onChange={handleChange}
        label="Filled"
        variant="filled"
        className={classes.myInput}
        inputRef={inputRef}
        autoFocus={true}
      />

      {/*
      sx - для стилизации
      sx={{ backgroundColor: "brown" }}
      className={classes.myBtn}
      */}
      <Input
        type="submit"
        variant="outlined"
        color="success"
        // ref={inputRef}
      />
    </form>
  )
}

export default FormMaterialUI;
