import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore , useMapStore} from '@/composables';
import Mapboxgl from 'mapbox-gl';



 export default defineComponent ({
 name: 'MapView',

 setup() {
  const mapElement = ref<HTMLDivElement>();
  const { userLocation, isUserLocationReady } = usePlacesStore();

  const { setMap } = useMapStore();


  const initMap = async () => {
    if(!mapElement.value) throw new Error('Div Element no existe');
    if(!userLocation.value) throw new Error('User location no existe');
  
    await Promise.resolve();

    const map = new Mapboxgl.Map({
      container: mapElement.value, // container ID
      style: 'mapbox://styles/mapbox/dark-v10', // style URL
      center: userLocation.value,
      zoom: 15, // starting zoom
    });
    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });

    const myLocationPupop = new Mapboxgl.Popup()
      .setLngLat(userLocation.value)
      .setHTML(`
        <h4>Aquí estoy actualmente</h4>
        <p>Actualmente en Ecuador</p>
      `);

    new Mapboxgl.Marker()
      .setLngLat(userLocation.value)
      .setPopup(myLocationPupop)
      .addTo(map);
    
    // establecer el mapa en Vuex
    setMap(map);

  }


  onMounted(() => {
    if (isUserLocationReady.value) return initMap();
    console.log('No tengo localizacion');
  });

  watch(isUserLocationReady, () => {
    if (userLocation.value) initMap();
  })

  return {
    isUserLocationReady,
    mapElement,
  };
},
})