/**
 * name, showName - беруться из profileReducer
 */
export const selectName = state => state.profile.name;
export const selectShowName = state => state.profile.showName;
export const selectCheckBoxStatus = state => state.profile.checkBox;