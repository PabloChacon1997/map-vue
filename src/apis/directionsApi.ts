import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1IjoicGFibG9hbmRyZXMiLCJhIjoiY2w3ajh3Zmo4MDc4MTN2b2I1c290c3c4dyJ9.JcvJ6fKD05RwezDwodCDpQ'
  }
});

export default searchApi;