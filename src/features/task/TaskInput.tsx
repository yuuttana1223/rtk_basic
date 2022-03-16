import { ChangeEvent, FormEvent, useCallback, useState, VFC } from "react";
import { useDispatch } from "react-redux";
import { newTask } from "./taskSlice";

export const TaskInput: VFC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(newTask(title));
      setTitle("");
    },
    [dispatch, title]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={title} />
      <button>NEW</button>
    </form>
  );
};
