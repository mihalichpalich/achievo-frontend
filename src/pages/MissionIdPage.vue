<style scoped lang="scss">
</style>

<script lang="ts">
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute()

    return {
      id: route.params.id
    }
  }
}
</script>

<template>
  <h1>Страница миссии с id = {{ id }}</h1>
</template>