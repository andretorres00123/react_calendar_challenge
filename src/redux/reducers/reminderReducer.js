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
    case types.LOAD_IMAGE_SUCESS:
      const newsIndex = state.list.findIndex((news) => news.id === action.id);
      return {
        ...state,
        'list': [
          ...state.list.slice(0, newsIndex),
          {
            ...state.list[newsIndex],
            'image': action.url,
          },
          ...state.list.slice(newsIndex + 1),
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
