import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TaskData {
    customerId: number;
    id: number;
    stageId: string;
    sector: string;
    salary: number;
    experienceMonth: number;
    experienceYear: number;
    region: string;
    businessAddress: string;
    currency: string;
    purpose: string;
    amount: number;
    duration: number;
    interest: number;
}

interface InitialStateType {
    tasks: TaskData[];
    taskCount: number;
}

const initialState: InitialStateType = {
    tasks: [],
    taskCount: 0
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ newTask: TaskData }>) => {
            state.taskCount++;
            const { newTask } = action.payload;
            newTask.id = state.taskCount;
            state.tasks.push(newTask);
        },
        updateTask: (state, action: PayloadAction<{ formData: TaskData; nextStage: string }>) => {
            const { formData, nextStage } = action.payload;
            state.tasks = state.tasks.map((task) =>
                task.id === formData.id
                    ? { ...formData, stageId: nextStage }
                    : task
            );
        }
    }
});

export const { reducer: taskReducer, actions } = taskSlice;
export const { addTask, updateTask } = actions;
