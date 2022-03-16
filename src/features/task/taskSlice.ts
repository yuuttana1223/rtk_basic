import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskState = {
  idCount: number;
  tasks: Task[];
};

const initialState: TaskState = {
  idCount: 3,
  tasks: [
    {
      id: 1,
      title: "タスク1",
      completed: false,
    },
    {
      id: 2,
      title: "タスク2",
      completed: true,
    },
    {
      id: 3,
      title: "タスク3",
      completed: false,
    },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<string>) => {
      state.idCount++;
      const newItem = {
        id: state.idCount,
        title: action.payload, // payloadは送られてくる値
        completed: false,
      };
      state.tasks = [...state.tasks, newItem];
    },
    completeTask: (state, action: PayloadAction<Task>) => {
      // state.tasks.map((task) => {
      //   if (task.id === action.payload.id) {
      //     task.completed = !task.completed;
      //   }
      //   return task;
      // })
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;
