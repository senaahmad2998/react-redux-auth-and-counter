import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false, email: "" };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.email = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.email = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
