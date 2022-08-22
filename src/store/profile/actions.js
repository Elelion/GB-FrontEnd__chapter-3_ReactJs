/**
 * :: - производный разделитель, еще есть такие вариации: @@, ///
 *
 * action's - нужны для передачи действий, те тупо константы, которые потом
 * перебираются в switch что в reducer
 */
export const CHANGE_SHOW_NAME = 'PROFILE::CHANGE_SHOW_NAME';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const CHANGE_CHECK_BOX_STATUS = 'PROFILE::CHANGE_CHECKBOX_STATUS';

export const changeShowName = {
  type: CHANGE_SHOW_NAME,
}

export const changeCheckBoxStatus = {
  type: CHANGE_CHECK_BOX_STATUS,
}

/**/

/**
 * подобные ф-ции называются ActionCreator
 * те создатели Actions
 */
export const changeName = (newName) => ({
  type: CHANGE_NAME,
  payload: newName,
});
