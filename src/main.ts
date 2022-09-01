import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoicGFibG9hbmRyZXMiLCJhIjoiY2w3ajh3Zmo4MDc4MTN2b2I1c290c3c4dyJ9.JcvJ6fKD05RwezDwodCDpQ';



if (!navigator.geolocation) {
  alert('Tu navegador no soporta el geolocation!!!');
  throw new Error('Tu navegador no soporta el geolocation!!!');
}

createApp(App).use(store).use(router).mount('#app')
