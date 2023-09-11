<template>
  <div class="app">
    <mission-form @create="createMission" />
    <mission-list :missions="missions" @remove="removeMission" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, Ref } from "vue";

import { Mission } from "@/types/mission";
import MissionForm from "@/components/MissionForm/MissionForm.vue";
import MissionList from "@/components/MissionList/MissionList.vue";

export default defineComponent({
  components: { MissionForm, MissionList },
  setup() {
    const missions: Ref<Mission[]> = ref([
      {
        id: 1,
        title: "Зов природы: Восстановление баланса",
        body: "Поиск кнопки «Свернуть» для древа навигации",
      },
      {
        id: 2,
        title: "Зов героев: Расширение возможностей",
        body: "Поиск и добавление колонки с исполнителем в таблицы со списком Issue",
      },
      {
        id: 3,
        title: "Восстание древесных духов",
        body: "Путешествие в мир реактивных модалок для создания сущностей",
      },
    ]);

    const createMission = (mission: Mission) => {
      missions.value.push(mission);
    };

    const removeMission = (mission: Mission) => {
      missions.value = missions.value.filter((m) => m.id !== mission.id);
    };

    return {
      missions,
      createMission,
      removeMission,
    };
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
