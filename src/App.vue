<script lang="ts">
import { ref, defineComponent, Ref, onMounted, watch, computed } from "vue";

import MissionForm from "@/components/MissionForm/MissionForm.vue";
import MissionList from "@/components/MissionList/MissionList.vue";
import AppDialog from "@/components/ui/AppDialog/AppDialog.vue";
import AppButton from "@/components/ui/AppButton/AppButton.vue";

import { Mission } from "@/types/mission";
import { fetchMissions } from "@/services/missions";
import AppSelect from "@/components/ui/AppSelect/AppSelect.vue";

export default defineComponent({
  components: {AppSelect, AppButton, AppDialog, MissionForm, MissionList},
  setup() {
    const missions: Ref<Mission[]> = ref([]);
    const dialogVisible = ref(false)
    const selectedSort = ref<'title' | 'body' | ''>('')
    const sortOptions = [
      {
        value: 'title',
        name: 'По названию'
      },
      {
        value: 'body',
        name: 'По содержимому'
      }
    ]

    const sortedMissions = computed(() => [...missions.value].sort((m1, m2) => {
      if (selectedSort.value) {
        return m1[selectedSort.value].localeCompare(m2[selectedSort.value])
      }

      return 0
    }));

    onMounted(() => {
      getMissions()
    });

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
      selectedSort,
      sortOptions,
      sortedMissions,
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
    <div class="app__btns">
      <app-button @click="showDialog">Создать миссию</app-button>
      <app-select v-model="selectedSort" :options="sortOptions" label="Сортировка"/>
    </div>
    <mission-list :missions="sortedMissions" @remove="removeMission" v-if="missions.length" />
    <div v-else>Идет загрузка...</div>
    <app-dialog v-model:show="dialogVisible">
      <mission-form @create="createMission" />
    </app-dialog>
  </div>
</template>
