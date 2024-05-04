import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [{
        id: 1,
        name: "First Task",
        is_completed: false,
      },{
        id: 2,
        name: "Second Task",
        is_completed: false,
      },],
    task: {
      id: 1,
      name: "First Task",
      is_completed: false,
    },
  }),

  getters:{
    completedTasks : (state) => state.task.filter(task.is_completed),
    uncompletedTasks(){
        return this.tasks.filter(task =>!task.is_completed)
    },
    
  }
});
