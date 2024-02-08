import { createSlice } from "@reduxjs/toolkit";
export const UserDataSlice = createSlice({
  name: "authStatus",
  initialState: {
    authStatus: "SignUp",
  },
  reducers: {
    toggleAuthStatus: (state, action) => {
      console.log("action", action);
      // TODO rework
      switch (action) {
        case "SignUp":
          return { ...state, authStatus: "SignUp" };
        case "SignIn":
          return { ...state, authStatus: "SignIn" };
        case "Profile":
          return { ...state, authStatus: "Profile" };
      }
    },
  },
});

export const { toggleAuthStatus } = UserDataSlice.actions;
export default UserDataSlice.reducer;
