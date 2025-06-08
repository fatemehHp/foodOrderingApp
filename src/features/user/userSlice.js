import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserName(state, action) {
      state.userName = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { getUserName } = userSlice.actions;
