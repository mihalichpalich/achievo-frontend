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
  <div>
    <h3>Список миссий</h3>
    <mission-item v-for="mission in missions" :mission="mission" />
  </div>
</template>
