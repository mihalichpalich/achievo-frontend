<style scoped>
@import "styles.scss";
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MissionItem from "../MissionItem/MissionItem.vue";

export default defineComponent({
  components: { MissionItem },
  props: {
    missions: {
      type: Array,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    }
  },
  setup(_, { emit }) {
    const observerRef = ref<Element | null>(null)

    const loadData = () => {
      emit('loadData')
    }

    return {
      observerRef,
      loadData
    }
  }
});
</script>

<template>
  <div v-if="missions.length > 0">
    <h3>Список миссий</h3>
    <slot></slot>
    <transition-group name="mission-list">
      <mission-item
          v-for="mission in missions"
          :mission="mission"
          :key="mission.id"
          @remove="$emit('remove', mission)"
      />
    </transition-group>
    <div v-intersection="loadData" class="mission-list__observer" />
  </div>
  <h2 v-else class="mission-list__empty-message">Список миссий пуст</h2>
</template>
