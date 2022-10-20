import axios from 'axios';

export const picturesApi = async (value, page) => {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '29773824-39fd0ee837bb8082420a788ac';
    const options = {
      params: {
        key: API_KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: page,
      },
    };

  const responce = await axios.get(`${BASE_URL}`, options);
  return await responce.data.hits.map(picture => ({
    id: picture.id,
    webformatURL: picture.webformatURL,
    largeImageURL: picture.largeImageURL,
  }))  
  }

