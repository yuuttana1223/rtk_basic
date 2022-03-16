import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";

const API_URL = "https://jsonplaceholder.typicode.com/users";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type FetchState = {
  users?: User[];
};

const initialState: FetchState = {
  users: [],
};
export const fetchAsyncGet = createAsyncThunk("fetch/get", async () => {
  const res = await axios.get<User[]>(API_URL);
  return res.data;
});

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  // 非同期が終わった後に実行される処理
  extraReducers: (builder) => {
    // 成功した処理
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    });
  },
});

export const selectUsers = (state: RootState) => state.fetch.users;
export default fetchSlice.reducer;
