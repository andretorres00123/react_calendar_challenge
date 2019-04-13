import * as types from '../actions/actionTypes';
import initialState from './initialState';

const reminderReducer = (state = initialState.reminder, action) => {
  switch(action.type) {
    case types.CREATE_NEW_REMINDER_SUCCESS:
      return {
        ...state,
        'list': [
          ...state.list,
          {
            'id': action.newReminder.id,
            'startDate':action.newReminder.startDate,
            'endDate': action.newReminder.endDate,
            'title': action.newReminder.title,
            'color': action.newReminder.color,
          },
        ],
      };
    case types.CLEAN_REMINDER:
    return {
      ...state,
      'list': [],
    };
    default:
      return state;
  }
};

export default reminderReducer;
