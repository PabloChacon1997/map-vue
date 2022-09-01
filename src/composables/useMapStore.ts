import { useStore } from 'vuex';
import { computed } from 'vue';
import { StateInterface } from '@/store';
import Mapboxgl from 'mapbox-gl';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useMapStore = () => {
  const store = useStore<StateInterface>();

  return {
    map: computed(() => store.state.map),
    distance: computed(() => store.state.map.distance),
    duration: computed(() => store.state.map.duration),
    // Getters
    isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),
    // Mutations
    setMap: (map: Mapboxgl.Map) => store.commit('map/setMap', map),
    // Actions
  }
}