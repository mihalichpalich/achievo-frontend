<style scoped>
@import "./styles.scss";
</style>

<script lang="ts">
export default {
  name: "app-button",
};
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
