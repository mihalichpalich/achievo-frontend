<style scoped lang="scss">
@import "styled.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
import toggleMixin from "@/mixins/ToggleMixin/ToggleMixin";

export default defineComponent({
  name: "app-dialog",
  mixins: [toggleMixin]
});
</script>

<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
