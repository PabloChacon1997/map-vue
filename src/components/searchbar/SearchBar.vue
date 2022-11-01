<script lang="ts" src="./SearchBar.ts" />


<template>
  <div class="searchbar-container">
    <input
      class="form-control bg-dark"
      type="text"
      placeholder="Buscar lugares..."
      v-model="searchTerm"
    />
    <SearchResults />
  </div>
</template>


<style scoped>
.searchbar-container {
  background-color: dark;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  color: rgb(190, 183, 183);
  left: 30px;
  overflow: hidden;
  padding: 5px;
  position: fixed;
  top: 30px;
  width: 250px;
  z-index: 999;
}

input {
  color: rgb(190, 183, 183);
  text-decoration-color: rgb(190, 183, 183);
}
.form-control::-ms-input-placeholder {
  color: rgb(190, 183, 183);
}
input:focus {
    color: rgb(190, 183, 183);
}
</style>