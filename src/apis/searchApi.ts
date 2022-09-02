import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: 'pk.eyJ1IjoicGFibG9hbmRyZXMiLCJhIjoiY2w3ajh3Zmo4MDc4MTN2b2I1c290c3c4dyJ9.JcvJ6fKD05RwezDwodCDpQ'
  }
});

export default searchApi;