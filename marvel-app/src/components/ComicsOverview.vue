<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { useComics } from "@/composables/marvelApi";
import type { Comic } from "@/types/marvel";
const isLoading: Ref<boolean> = ref(false);
const data: Ref<Comic[] | undefined> = ref();
const getComics = async () => {
  isLoading.value = true;
  const comics = await useComics();
  data.value = comics.results;
  isLoading.value = false;
};

onMounted(async () => {
await getComics();
});
</script>

<template>

<div v-if="isLoading"><p>Loading...</p>
    
</div>
<div v-if="data && !isLoading">
    <div class="grid greid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div :key="comic.id" v-for="comic in data">{{ comic.title }}</div>
    </div>
</div>
</template>
