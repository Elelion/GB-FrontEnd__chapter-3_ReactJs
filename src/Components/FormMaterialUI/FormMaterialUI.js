import {useContext, useEffect, useRef, useState} from "react"
import {TextField, Input, Button} from "@mui/material";
import classes from "./FormMaterialUI.module.css";
import {ThemeContext} from "../helpers/ThemeContext";

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
      {/*
      <Input
        type="submit"
        variant="outlined"
        color="success"
        // ref={inputRef}
      />
      */}
      <Button
        type="submit"
        variant="contained"
        color="success"
      >
        <span style={{color: props.messageColor}}>Отправка</span>
      </Button>
    </form>
  )
}

export default FormMaterialUI;

/**/

/**
 * Пример HOC - самый простой и наглядный
 *
 * HOC - это просто ф-ция принимающая что то, с целью предотвращения дублирования
 * кода
 *
 * так же данный код эмитирует паттерн - Декоратор
 * https://refactoring.guru/ru/design-patterns/decorator
 */
const _sum = (a, b) => a + b;
const _mul = (a, b) => a * b;

const _withLogger = (fn) => {
  return (...args) => {
    console.log(args);
    return fn(args);
  }
}

const sumWithLogs = _withLogger(_sum);
const mulWithLogs = _withLogger(_mul);

sumWithLogs(2, 3); // [2, 3]
mulWithLogs(3, 2); // [3, 2]
console.log(_sum(2, 3)) // 5

/**/

/**
 * по выше аналогичному примеру делаем теперь логер/контекст для нашей формы
 * она же Декоратор, она же HOC
 */
const withContext = (Component) => {
  return (props) => {
    console.log(props );

    const {messageColor} = useContext(ThemeContext);

    // обрамим текст Button в цвет
    return <Component {...props} messageColor={messageColor} />;
  }
}

export const FormWithLogger = withContext(FormMaterialUI)