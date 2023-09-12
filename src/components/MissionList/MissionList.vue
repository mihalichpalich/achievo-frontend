<style scoped>
@import "styles.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
import MissionItem from "../MissionItem/MissionItem.vue";

export default defineComponent({
  components: { MissionItem },
  props: {
    missions: {
      type: Array,
      required: true,
    },
  },
});
</script>

<template>
  <div v-if="missions.length > 0">
    <h3>Список миссий</h3>
    <mission-item
      v-for="mission in missions"
      :mission="mission"
      :key="mission.id"
      @remove="$emit('remove', mission)"
    />
  </div>
  <h2 v-else class="empty-message">Список миссий пуст</h2>
</template>
