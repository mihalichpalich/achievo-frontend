<style scoped>
@import "styles.scss";
</style>

<script lang="ts">
import { defineComponent, SetupContext, InputHTMLAttributes } from "vue";

export default defineComponent({
  name: "app-input",
  props: {
    modelValue: [String, Number],
  },
  setup(_, { emit }: SetupContext) {
    const updateInput = (event: InputHTMLAttributes["value"]) => {
      emit("update:modelValue", event.target.value);
    };

    return { updateInput };
  },
});
</script>

<template>
  <input type="text" class="input" :value="modelValue" @input="updateInput" />
</template>
