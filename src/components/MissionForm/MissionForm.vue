<style scoped>
@import "./styles.scss";
</style>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const mission = ref({
      title: "",
      body: "",
    });

    const createMission = () => {
      mission.value.id = Date.now();
      emit("create", mission.value);
      mission.value = {
        title: "",
        body: "",
      };
    };

    return {
      mission,
      createMission,
    };
  },
};
</script>

<template>
  <form action="#" @submit.prevent>
    <h4>Создание миссии</h4>
    <app-input type="text" placeholder="Название" v-model="mission.title" />
    <app-input type="text" placeholder="Описание" v-model="mission.body" />
    <app-button @click="createMission">Создать</app-button>
  </form>
</template>
