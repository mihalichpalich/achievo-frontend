<template>
  <div class="app">
    <form action="#" @submit.prevent>
      <h4>Создание миссии</h4>
      <input
        type="text"
        placeholder="Название"
        class="input"
        v-bind:value="title"
        @input="title = $event.target.value"
      />
      <input
        type="text"
        placeholder="Описание"
        class="input"
        v-bind:value="body"
        @input="body = $event.target.value"
      />
      <button class="btn" @click="createMission">Создать</button>
    </form>
    <div class="mission" v-for="mission in missions">
      <div>
        <strong>Название:</strong>
        {{ mission.title }}
      </div>
      <div>
        <strong>Описание:</strong>
        {{ mission.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      title: "",
      body: "",
    };
  },
  methods: {
    createMission() {
      const newMission = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.missions.push(newMission);
      this.title = "";
      this.body = "";
    },
    inputTitle(event) {
      this.title = event.target.value;
    },
  },
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

form {
  width: 30%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.mission {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
}

.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
