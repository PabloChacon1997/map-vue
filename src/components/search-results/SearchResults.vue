<script lang="ts" src="./SearchResults.ts" />

<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center bg-dark">
    <h5>Cargando</h5>
    <span>Espere por favor</span>
  </div>
  <ul v-else-if="places.length > 0" class="list-group mt-3">
    <li v-for="place in places"
        class="list-group-item list-group-item-action bg-dark"
        :class="{'active' : place.id === activePlace}"
        :key="place.id"
        @click="onPlaceClicked(place)">
      <h5>{{place.text}}</h5>
      <p>{{place.place_name}}</p>
      <div align="right">
        <button 
          class="btn btn-outline-primary btn-sm"
          :class="(place.id === activePlace) ? 'btn-outline-light': 'btn-outline-primary'"
          @click.self="getRoutesDirections(place)"
          >
          Direcciones
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
li {
  cursor: pointer;
  color: rgb(190, 183, 183);
}

h5 {
  font-size: 15px;
  color: rgb(190, 183, 183);
}
p {
  font-size: 10px;
  color: rgb(190, 183, 183);
}
</style>