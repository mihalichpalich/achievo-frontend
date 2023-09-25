<style scoped>
@import "./styles.scss";
</style>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

import { Mission } from "@/types/mission";

export default defineComponent({
  setup(_, { emit }) {
    const mission: Ref<Mission> = ref({
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
});
</script>

<template>
  <form action="#" @submit.prevent>
    <h4>Создание миссии</h4>
    <app-input type="text" placeholder="Название" v-model="mission.title" v-focus />
    <app-input type="text" placeholder="Описание" v-model="mission.body" />
    <app-button @click="createMission">Создать</app-button>
  </form>
</template>
