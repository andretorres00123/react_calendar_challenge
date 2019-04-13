// import {firebaseSliders, firebase} from '../../firebase';
// import {firebaseLooper} from '../../Components/ui/misc';
import * as types from './actionTypes';

export const createNew = (newNews) =>  {
    return {type: 'CREATE_NEW', newNews};
}

export const loadNewsSuccess = (news) => {
  return {type: types.LOAD_NEWS_SUCCESS, news};
};

const loadNewsRequest = () => {
  return {type: types.LOAD_NEWS_REQUEST};
}

const loadImageSuccess = (id, url) => {
  return {type: types.LOAD_IMAGE_SUCESS, id, url};
}

export const loadImage = (id, image) => {
  return function (dispatch) {
    // dispatch(loadNewsRequest());
    firebase.storage().ref('sliders')
    .child(image).getDownloadURL().then( url => {
      dispatch(loadImageSuccess(id, url));
    }).catch(error => {
      throw(error);
    });
  };
}

export const loadNews = () => {
  return function (dispatch) {
    dispatch(loadNewsRequest());
    const newsWithImages = [];
    return firebaseSliders.limitToLast(3).once('value').then((snapshot) => {
      const news = firebaseLooper(snapshot);

      news.forEach((news) => {
        firebase.storage().ref('sliders')
        .child(news.image).getDownloadURL().then( url => {
          newsWithImages.push({
            ...news,
            'images': url,
          });
        });
      });
    }).then(() => {
      dispatch(loadNewsSuccess(newsWithImages));
    }).catch(error => {
      throw(error);
    });
  };
};
