<style scoped>
@import "styles.scss";
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    mission: {
      type: Object,
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
      <app-button>Удалить</app-button>
    </div>
  </div>
</template>
