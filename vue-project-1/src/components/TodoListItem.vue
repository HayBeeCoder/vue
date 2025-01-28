<script setup lang="ts">
defineProps<{
  isChecked?: boolean | false
}>()



</script>

<template>
  <label :class="{checked: isChecked }">
    <input type="checkbox" :checked="isChecked"  />
    <slot></slot>
  </label>
</template>

<style scoped>
li {
  display: flex;
  gap: 8;
}

.checked{
  text-decoration: line-through;
}
</style>
