<style scoped lang="scss">
  @import "styles";
</style>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: 'app-select',
    props: {
      modelValue: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        default: () => []
      },
      label: {
        type: String,
      }
    },
    setup(_, { emit }) {
      const changeOption = (event: Event) => {
        emit('update:modelValue', (event.target as HTMLSelectElement).value)
      }

      return { changeOption }
    }
  })
</script>

<template>
  <label class="app-select__wrapper">
    {{ label }}
    <select :value="modelValue" @change="changeOption">
      <option disabled value="">Выберите из списка</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
  </label>
</template>