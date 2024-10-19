import { v4, validate } from "uuid";

export interface Task {
    id: string;
    title: string;
    isDone: boolean;
    createdAt: Date;
}

export const generateTaskId = () => v4();

export function isValidTaskTitle(title: string): boolean {
    return title.length > 0
}

export function isValidTaskId(id: string): boolean {
    return validate(id)
}

export function ensureTaskIdIsValid(id: string) {
    if (!isValidTaskId(id)) {
        throw new Error("invalid task id")
    }
}

export function ensureTaskTitleValid(title: string) {
    if (!isValidTaskTitle(title)) {
        throw new Error("invalid task title")
    }
}