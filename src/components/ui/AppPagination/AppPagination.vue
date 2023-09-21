<style scoped lang="scss">
  @import "styles";
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'app-pagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      required: true
    }
  }
})
</script>

<template>
  <div class="pagination">
    <div
        v-for="pageNumber in total"
        :key="pageNumber"
        class="pagination__page"
        :class="{ 'pagination__page_current': page === pageNumber }"
        @click="$emit('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>