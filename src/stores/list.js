import { defineStore } from "pinia";

export const listStore = defineStore("list", {
  state: () => ({
    todos: [
      {
        id: 1,
        text: "完成練習",
        isFinished: false,
      },
      {
        id: 2,
        text: "整理房間",
        isFinished: false,
      },
      {
        id: 3,
        text: "洗碗",
        isFinished: false,
      },
      {
        id: 4,
        text: "擦玻璃",
        isFinished: false,
      },
    ],
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
  },
  actions: {
    addTodo(text) {
      const newId = this.todos.length
        ? Math.max(...this.todos.map((todo) => todo.id)) + 1
        : 1;
      this.todos.push({ id: newId, text, isFinished: false });
    },
  },
});
