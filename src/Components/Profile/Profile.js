import {useContext} from "react";
import {ThemeContext} from "../helpers/ThemeContext";
import {store} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {
  CHANGE_NAME,
  changeCheckBoxStatus,
  changeShowName
} from "../../store/profile/actions";
import Form from "../Form/Form";
import {Checkbox, FormControlLabel} from "@mui/material";

export const Profile = () => {
  /**
   * {... , ...} = useContext(...) - фигурные скобки, тем самым достают нужный
   * объект из переданного во value объекта, а там у нас:
   * <ThemeContext.Provider value={{messageColor, setMessageColor}}>
   */
  const {messageColor, setMessageColor} = useContext(ThemeContext);

  /**/

  // обращаться на прямую к store не совсем хорошо, используем: useSelector
  const storeState = store.getState();
  console.log('Profile.store: ', storeState);

  // для передачи данных в store
  const dispatch = useDispatch();

  /**
   * для получения данных из Store
   * мы передаем в нее ф-цию, которая заберет весь stateStore и вернет
   * кусочек данных
   */
  const data = useSelector((state) => state);
  console.log('data:');
  console.log(data);

  /**
   * передаем через dispatch наш экшен changeShowName из store/profile/actions
   */
  const handleChangeShowName = () => {
    dispatch(changeShowName);
  }

  const handleChangeCheckBoxStatus = () => {
    dispatch(changeCheckBoxStatus);
  }

  /**/

  const handleClick = () => {
    /**
     * не забываем, что prev => prev УСЛОВИЕ тернанрник
     * prev - предыдущее состояние которое было на 100% верным
     * и без каких либо мутаций
     */
    setMessageColor(prevColor => prevColor === 'red' ? 'blue' : 'red');
  }

  const handleChangeName = (text) => {
    dispatch({
      type: CHANGE_NAME,
      payload: text,
    })

    console.log(text)
  }

  return (
    <>
      <h1>Profile page</h1>
      <button onClick={handleClick}>Change Theme</button>

      <p>current color:
        <b>
          <span style={{color: messageColor === "blue" ? "blue" : "red"}}>
            {messageColor}
          </span>
        </b>
      </p>
      <p>checkBox status: {data.checkBox === false ? "true" : "false"}</p>

      {/* аналогично: if (data.showName) === true {...} */}
      {data.showName && <span>{data.name}</span>}
      <button onClick={handleChangeShowName}>Change show name</button>

      <FormControlLabel
        control={<Checkbox defaultChecked />} label="CheckBox statue"
        onChange={handleChangeCheckBoxStatus}
      />

      <Form onSubmitEvent={handleChangeName} />
    </>
  )
}
