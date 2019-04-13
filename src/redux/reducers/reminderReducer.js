import * as types from '../actions/actionTypes';
import initialState from './initialState';

const reminderReducer = (state = initialState.reminder, action) => {
  switch(action.type) {
    case types.LOAD_REMINDER_SUCCESS:
      return {
        ...state,
        'list': action.news,
        'loading': false,
      };
    case types.LOAD_REMINDER_REQUEST:
      return {
        ...state,
        'loading': true,
      };
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
    case 'CREATE_NEW':
    return [
      ...state,
      {
        ...action.new,
      }
    ];
    default:
      return state;
  }
};

export default reminderReducer;
