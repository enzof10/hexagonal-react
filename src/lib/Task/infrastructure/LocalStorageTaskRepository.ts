import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

export const createLocalStorageTaskRepository = (): TaskRepository => {
    return {

        getAll: async () => {
            const tasks = localStorage.getItem("tasks");
            const parseTasks = tasks ? JSON.parse(tasks) as Task[] : [];
            return parseTasks;
        },

        save: async (task: Task) => {
            const tasks = localStorage.getItem("tasks");
            const parseTasks = tasks ? JSON.parse(tasks) as Task[] : [];
            const indexOfTask = parseTasks.findIndex(t => t.id === task.id);
            let newTasks

            if (indexOfTask !== -1) {
                parseTasks[indexOfTask] = task
            } else {
                parseTasks.push(task);
            }

            localStorage.setItem("tasks", JSON.stringify(parseTasks))
        },

        delete: async (id: string) => {
            const tasks = localStorage.getItem("tasks");
            const parseTasks = tasks ? JSON.parse(tasks) as Task[] : [];
            const filteredTasks = parseTasks.filter(t => t.id !== id);
            localStorage.setItem("tasks", JSON.stringify(filteredTasks))
        },

    }
}