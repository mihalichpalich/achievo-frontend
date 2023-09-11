<style scoped>
@import "styles.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";

import { Mission } from "@/types/mission";

export default defineComponent({
  props: {
    mission: {
      type: Object as () => Mission,
      required: true,
    },
  },
});
</script>

<template>
  <div class="mission">
    <div>
      <div>
        <strong>Название:</strong>
        {{ mission.title }}
      </div>
      <div>
        <strong>Описание:</strong>
        {{ mission.body }}
      </div>
    </div>
    <div class="mission__btns">
      <app-button @click="$emit('remove', mission)">Удалить</app-button>
    </div>
  </div>
</template>
