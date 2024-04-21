import {store} from "../redux/store";

export const getTaskById = (taskId) =>{
    const tasks = store.getState().tasks.tasks;
    return tasks.find(taskData => taskData.id == taskId);
}

