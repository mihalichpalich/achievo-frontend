<script lang="ts">
import { ref, defineComponent, Ref, onMounted } from "vue";

import MissionForm from "@/components/MissionForm/MissionForm.vue";
import MissionList from "@/components/MissionList/MissionList.vue";
import AppDialog from "@/components/ui/AppDialog/AppDialog.vue";
import AppButton from "@/components/ui/AppButton/AppButton.vue";

import { Mission } from "@/types/mission";
import { fetchMissions } from "@/services/missions";

export default defineComponent({
  components: {AppButton, AppDialog, MissionForm, MissionList},
  setup() {
    const missions: Ref<Mission[]> = ref([]);
    const dialogVisible = ref(false)

    onMounted(() => {
      getMissions()
    })

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

    const getMissions = async () => {
      const res = await fetchMissions()
      if (res) {
        missions.value = res.data
      }
    }

    return {
      missions,
      dialogVisible,
      createMission,
      removeMission,
      showDialog,
      getMissions
    };
  },
});
</script>

<template>
  <div class="app">
    <h1>Страница с миссиями</h1>
    <app-button @click="showDialog">Создать миссию</app-button>
    <mission-list :missions="missions" @remove="removeMission" v-if="missions.length" />
    <div v-else>Идет загрузка...</div>
    <app-dialog v-model:show="dialogVisible">
      <mission-form @create="createMission" />
    </app-dialog>
  </div>
</template>
