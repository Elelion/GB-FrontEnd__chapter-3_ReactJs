import {useContext} from "react";
import {ThemeContext} from "../helpers/ThemeContext";
import {store} from "../../store/store";
import {connect, shallowEqual, useDispatch, useSelector} from "react-redux";
import {
  CHANGE_NAME,
  changeCheckBoxStatus, changeName,
  changeShowName
} from "../../store/profile/actions";
import Form from "../Form/Form";
import {Checkbox, FormControlLabel} from "@mui/material";
import {
  selectCheckBoxStatus,
  selectName,
  selectShowName
} from "../../store/profile/selectors";

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
    // переносим это в store/profile/action.js

    /*
    dispatch({
      type: CHANGE_NAME,
      payload: text,
    });
    */


    // передаем в dispatch нашу ф-цию которая вернут по сути то же самое
    dispatch(changeName(text))

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

/**/

/**
 * комментарии к коду см выше, это измененная копия, для работы с connect
 */
export const ProfileToConnect = ({/*showName, name,*/ changeShowName, changeName, changeCheckBoxStatus}) => {
  const {messageColor, setMessageColor} = useContext(ThemeContext);
  const storeState = store.getState();
  console.log('Profile.store: ', storeState);

  /**
   * dispatch использовать в методах не красиво, по этому мы избавляемся от него
   * и будем использовать
   */
  // const dispatch = useDispatch();

  /**
   * за место data, мы будем использовать ф-ции из selectors
   * тк позвращая весь state, мы тянем вообще все данные, а это ведет
   * к излишней загруженности что очень плохо
   */
  // const data = useSelector((state) => state);

  /**
   * вторая ф-ция будет ф-цией которая используется для сравнения предыдущего
   * значения и текущего значения
   *
   * (prev, current) => prev !== current
   * если вернет true, значит React воспримет это как изменение и обновит компонент
   * false - значит компонент НЕ изменился, и React не чего не будет обновлять
   * это аналогично уже готовой ф-ции shallowEqual
   */
  // const showName = useSelector(selectShowName, (prev, current) => prev !== current);
  const showName = useSelector(selectShowName, shallowEqual);
  const name = useSelector(selectName);
  const checkBox = useSelector(selectCheckBoxStatus);

  const handleChangeShowName = () => {
    // dispatch(changeShowName);
    changeShowName();
  }

  const handleChangeCheckBoxStatus = () => {
    // dispatch(changeCheckBoxStatus);
    changeCheckBoxStatus();
  }

  const handleClick = () => {
    setMessageColor(prevColor => prevColor === 'red' ? 'blue' : 'red');
  }

  const handleChangeName = (text) => {
    // dispatch(changeName(text));
    changeName(text);
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
      <p>checkBox status: {checkBox === false ? "true" : "false"}</p>

      {showName && <span>{name}</span>}
      <button onClick={handleChangeShowName}>Change show name</button>

      <FormControlLabel
        control={<Checkbox defaultChecked />} label="CheckBox statue"
        onChange={handleChangeCheckBoxStatus}
      />

      <Form onSubmitEvent={handleChangeName} />
    </>
  )
}

/**
 * название общепринятое, просто так надо, это классика
 * showName, name - задаем и в props'ах
 */
const mapStateToProps = (state) => ({
  // showName: state.profile.showName,
  showName: selectShowName(state),

  // name: state.profile.name,
  name: selectName(state),
});

// название так же обзепринятое, указываем тут actions которые нам нужны
const mapDispatchToProps = {
  changeShowName: () => changeShowName,
  changeName: changeName,
  changeCheckBoxStatus: () => changeCheckBoxStatus,
}


/**
 * первым аргументом мы передаем до 4х аргументов (но мы будем кидать только два - ()() )
 * вторым агрументом мы передаем компоненту которую хотим законнектить
 *
 * connect - служит для привязки данных к компоненту, смысл с useSelector - у них схож
 */
const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileToConnect);

export default ConnectedProfile;
