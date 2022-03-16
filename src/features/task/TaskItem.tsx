import { VFC } from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask, Task } from "./taskSlice";

type Props = {
  task: Task;
};

export const TaskItem: VFC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        onClick={() => dispatch(completeTask(task))}
        defaultChecked={task.completed}
      />
      <span>{task.title}</span>
      <button onClick={() => dispatch(deleteTask(task))}>DELETE</button>
    </li>
  );
};
