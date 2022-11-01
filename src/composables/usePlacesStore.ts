import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { StateInterface } from '@/store/index';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const usePlacesStore = () => {
  
  const store = useStore<StateInterface>();
  onMounted(() => {
    if(!store.getters['places/isUserLocationReady']) {
      store.dispatch('places/getInitiaLocation');
    }
  });
  return {
    // State
    isLoading: computed(() => store.state.places.isLoading),
    userLocation: computed(() => store.state.places.userLocation),
    places: computed(() => store.state.places.places),
    isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),
    // Getters
    isUserLocationReady: computed(() => store.getters['places/isUserLocationReady']),
    // Actions
    searchPlacesByTerm: (query = '') => store.dispatch('places/searchPlacesByTerm', query),
    // Mutations
  }
}