<script lang="ts">
import { ref, defineComponent, Ref, onMounted, computed } from "vue";

import MissionForm from "@/components/MissionForm/MissionForm.vue";
import MissionList from "@/components/MissionList/MissionList.vue";
import AppDialog from "@/components/ui/AppDialog/AppDialog.vue";
import AppButton from "@/components/ui/AppButton/AppButton.vue";
import AppSelect from "@/components/ui/AppSelect/AppSelect.vue";
import AppPagination from "@/components/ui/AppPagination/AppPagination.vue";
import AppInput from "@/components/ui/AppInput/AppInput.vue";

import { Mission } from "@/types/mission";
import { fetchMissions } from "@/services/missions";
import { sortOptions } from "@/dicts/sortOptions";

export default defineComponent({
  components: {AppSelect, AppButton, AppDialog, MissionForm, MissionList, AppPagination, AppInput},
  setup() {
    const missions: Ref<Mission[]> = ref([]);
    const dialogVisible = ref(false)
    const selectedSort = ref<'title' | 'body' | ''>('')
    const searchQuery = ref('')
    const page = ref(1)
    const limit = ref(5)
    const totalPages = ref(0)

    const sortedMissions = computed(() => [...missions.value].sort((m1, m2) => {
      if (selectedSort.value) {
        return m1[selectedSort.value].localeCompare(m2[selectedSort.value])
      }

      return 0
    }));

    const sortedAndSearchedPosts = computed(() =>
        sortedMissions.value.filter(mission => mission.title.toLowerCase().includes(searchQuery.value.toLowerCase())))

    onMounted(() => {
      getMissions()
    });

    const showDialog = () => {
      dialogVisible.value = true
    }

    const createMission = (mission: Mission) => {
      missions.value.push(mission);
      dialogVisible.value = false
    };

    const removeMission = (mission: Mission) => {
      missions.value = missions.value.filter((m) => m.id !== mission.id);
    };

    const getMissions = async () => {
      const res = await fetchMissions(page.value, limit.value)
      if (res) {
        ++page.value
        missions.value = [...missions.value, ...res.data]
        totalPages.value = Math.ceil(res.headers['x-total-count'] / limit.value)
      }
    }

    return {
      missions,
      dialogVisible,
      selectedSort,
      sortOptions,
      sortedAndSearchedPosts,
      searchQuery,
      page,
      totalPages,
      showDialog,
      createMission,
      removeMission,
      getMissions
    };
  },
});
</script>

<template>
  <div>
    <h1>Страница с миссиями</h1>
    <app-input v-model="searchQuery" placeholder="Поиск..."/>
    <div class="app__btns">
      <app-button @click="showDialog">Создать миссию</app-button>
      <app-select v-model="selectedSort" :options="sortOptions" label="Сортировка"/>
    </div>
    <mission-list
        :missions="sortedAndSearchedPosts"
        :page="page"
        :total-pages="totalPages"
        @remove="removeMission"
        v-if="missions.length"
        @loadData="getMissions"
    />
    <div v-else>Идет загрузка...</div>
    <app-dialog v-model:show="dialogVisible">
      <mission-form @create="createMission" />
    </app-dialog>
  </div>
</template>
