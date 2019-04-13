// import {firebaseSliders, firebase} from '../../firebase';
// import {firebaseLooper} from '../../Components/ui/misc';
import * as types from './actionTypes';

export const createNewSucces = (newReminder) =>  {
    return {type: 'CREATE_NEW_REMINDER_SUCCESS', newReminder};
}

export const deleteReminders = () => {
  return {type: 'CLEAN_REMINDER'}
};

export const cleanReminders = () => {
  return function (dispatch) {
    dispatch(deleteReminders());
  };
};

export const createNewReminder = (newReminder) => {
  return function (dispatch) {
    dispatch(createNewSucces(newReminder));
  };
};

