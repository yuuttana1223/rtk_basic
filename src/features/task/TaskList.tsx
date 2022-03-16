import { VFC } from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";
import { TaskItem } from "./TaskItem";

export const TaskList: VFC = () => {
  const tasks = useSelector(selectTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
