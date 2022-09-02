import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { PlacesResponse, Feature } from '@/interfaces/places';


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
    },
    // TODO: colocar el valor de retorno
    async searchPlacesByTerm({ commit, state }, query: string): Promise<Feature[]> {
        if(query.length === 0) {
            commit('setPlaces', []);
            return [];
        }

        if ( !state.userLocation ) {
            throw new Error('No ahy ubicación');
        }

        commit('setIsLoadingPlaces');

        const respuesta = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });

        commit('setPlaces', respuesta.data.features);
        return respuesta.data.features;
    }
}



export default actions;