<style scoped>
@import "styles.scss";
</style>

<script>
export default {
  props: {
    missions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="mission" v-for="mission in missions">
    <div>
      <strong>Название:</strong>
      {{ mission.title }}
    </div>
    <div>
      <strong>Описание:</strong>
      {{ mission.body }}
    </div>
  </div>
</template>
