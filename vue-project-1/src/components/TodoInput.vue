<template>
  <div>
    <!-- <input type="text" v-model="model" /> -->
    <input
  :value="model"
  @input="(event: Event) =>{

   model = (event.target as HTMLInputElement).value
   console.log(model)
  }"
  </div>
</template>

<script setup lang="ts">
const model = defineModel<String>("todoInput")
</script>

<style scoped></style>
