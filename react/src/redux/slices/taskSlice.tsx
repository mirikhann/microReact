import {createSlice} from "@reduxjs/toolkit";

export interface TaskData {
    customerID:number;
    stageId:string;
    sector:string;
    salary:string;
    experienceMonth:string;
    experienceYear:string;
    region:string;
    businessAddress:string;
    currency:string;
    purpose:string;
    amount:string;
    duration:string;
    interest:string;

}

const initialState = {
    tasks: [],
    taskCount: 0
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers:{
        addTask: (state, action) => {
            state.taskCount++;
            const {newTask} = action.payload;
            newTask.id = Number(state.taskCount);
            state.tasks = [...state.tasks, newTask];
        },
        updateTask: (state, action) =>{
            let {formData,nextStage} = action.payload;
            let newList = state.tasks.filter((val)=>{
                if(val.id!==formData.id)
                {
                    return val;
                }
            });
            formData = JSON.parse(JSON.stringify(formData))
            formData.stageId = nextStage;
            state.tasks = [...newList, formData];
        }
    }
});
export const { reducer: taskReducer} = taskSlice;
export const { addTask,updateTask } = taskSlice.actions;
