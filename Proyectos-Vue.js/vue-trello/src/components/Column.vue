<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
    <task-list :listId="listId" :tasks="taskList"> </task-list>
  </section>
</template>
<script>
import TaskList from "@/components/TaskList";
export default {
  name: "column",
  components: { TaskList },

  props: {
    listId: String,
    name: String,
  },
  data() {
    return {
      taskList: [
        {
          id: "1",
          title: "Aprender vue",
          completed: false,
        },
        {
          id: "2",
          title: "Aprender Vuex",
          completed: false,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
section {
  box-sizing: border-box;
  background-color: #eceff1;
  border-radius: 3px;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  margin: 1rem;
  padding: 1rem;
  width: 100%;
}

header {
  margin: 0;
  padding-bottom: 1rem;
}

h3 {
  margin: 0;
}

@media screen and (min-width: 600px) {
  section {
    width: calc(50% - 2rem - 2px);
  }
}
@media screen and (min-width: 1024px) {
  section {
    width: calc(33% - 2rem - 2px);
  }
}
@media screen and (min-width: 1200px) {
  section {
    width: calc(25% - 2rem - 2px);
  }
}
</style>
./Tasklist.vue
