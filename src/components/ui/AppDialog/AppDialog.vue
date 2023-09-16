<style scoped lang="scss">
@import "styled.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    const hideDialog = () => {
      emit('update:show', false)
    }

    return { hideDialog }
  }
});
</script>

<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
