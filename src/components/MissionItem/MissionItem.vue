<style scoped lang="scss">
@import "styles.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";

import { Mission } from "@/types/mission";
import AppButton from "@/components/ui/AppButton/AppButton.vue";

export default defineComponent({
  components: {AppButton},
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
      <app-button @click="$router.push(`/missions/${mission.id}`)">Открыть</app-button>
      <app-button @click="$emit('remove', mission)">Удалить</app-button>
    </div>
  </div>
</template>
