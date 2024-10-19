import { ensureTaskIdIsValid } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

export const createTaskService = (repository: TaskRepository) => {
    return {

        getAll: async () => repository.getAll(),

        save: async (id: string, title: string, isDone: boolean) => {
            ensureTaskIdIsValid(id)
            await repository.save({
                id,
                title,
                isDone,
                createdAt: new Date()
            })
        },

        delete: async (id: string) => {
            ensureTaskIdIsValid(id)
            await repository.delete(id)
        }
    }
}