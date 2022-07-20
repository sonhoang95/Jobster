import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  (user, thunkAPI) => {
    console.log(`Register User: ${user}`);
  }
);

export const loginUser = createAsyncThunk(
  "/user/loginUser",
  (user, thunkAPI) => {
    console.log(`Login User: ${user}}`);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
