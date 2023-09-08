<template>
  <div class="app">
    <mission-form />
    <mission-list :missions="missions" />
  </div>
</template>

<script>
import MissionForm from "@/components/MissionForm/MissionForm.vue";
import MissionList from "@/components/MissionList/MissionList.vue";

export default {
  components: { MissionList, MissionForm },
  data() {
    return {
      missions: [
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
      ],
    };
  },
  methods: {},
};
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
