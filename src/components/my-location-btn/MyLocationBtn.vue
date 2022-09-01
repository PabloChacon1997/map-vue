
<template>
  <button v-if="isBtnReady"
    class="btn btn-seccondary text-white"
    @click="onMyLocationClick"
  >
    Mi ubicación
  </button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from '@/composables';
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'MyLocationBtn',
  setup() {

    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { map, isMapReady } = useMapStore();

    return {

      isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),

      onMyLocationClick: () => {
        map.value.map?.flyTo({
          center: userLocation.value,
          zoom: 14
        })
      }
    }
  }
})
</script>

<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
}
</style>