<style scoped>
@import "./styles.scss";
</style>

<script>
export default {
  data() {
    return {
      mission: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createMission() {
      this.mission.id = Date.now();
      this.missions.push(newMission);
      this.title = "";
      this.body = "";
    },
  },
};
</script>

<template>
  <form action="#" @submit.prevent>
    <h4>Создание миссии</h4>
    <input
      type="text"
      placeholder="Название"
      class="input"
      v-model="mission.title"
    />
    <input
      type="text"
      placeholder="Описание"
      class="input"
      v-model="mission.body"
    />
    <button class="btn" @click="createMission">Создать</button>
  </form>
</template>
