import { useEffect, VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGet, selectUsers } from "./fetchSlice";

export const Fetch: VFC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchAsyncGet());
  }, [dispatch]);

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
};
