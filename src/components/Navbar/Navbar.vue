<style scoped lang="scss">
@import 'styles';
</style>

<script lang="ts">
export default {}
</script>

<template>
  <div class="navbar">
    <h2 class="navbar__logo" @click="$router.push('/')">Achievo</h2>
    <div class="navbar__btns">
      <app-button @click="$router.push('/missions')">Миссии</app-button>
      <app-button @click="$router.push('/about')">О сайте</app-button>
    </div>
  </div>
</template>