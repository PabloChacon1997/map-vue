import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitiaLocation( { commit } ) {
        // TODO: Colocar loading
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
            (err) => {
                console.log(err);
                throw new Error('No geolocation :(');
            }
        );
    }
}



export default actions;