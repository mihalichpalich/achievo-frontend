<template>
  <div class="app">
    <h1>Страница с миссиями</h1>
    <app-button @click="showDialog">Создать миссию</app-button>
    <mission-list :missions="missions" @remove="removeMission" />
    <app-dialog v-model:show="dialogVisible">
      <mission-form @create="createMission" />
    </app-dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, Ref } from "vue";

import { Mission } from "@/types/mission";
import MissionForm from "@/components/MissionForm/MissionForm.vue";
import MissionList from "@/components/MissionList/MissionList.vue";
import AppDialog from "@/components/ui/AppDialog/AppDialog.vue";

export default defineComponent({
  components: { AppDialog, MissionForm, MissionList },
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
    const dialogVisible = ref(false)

    const createMission = (mission: Mission) => {
      missions.value.push(mission);
      dialogVisible.value = false
    };

    const removeMission = (mission: Mission) => {
      missions.value = missions.value.filter((m) => m.id !== mission.id);
    };

    const showDialog = () => {
      dialogVisible.value = true
    }

    return {
      missions,
      dialogVisible,
      createMission,
      removeMission,
      showDialog
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
  display: flex;
  flex-direction: column;
  row-gap: 3vh;
}
</style>
