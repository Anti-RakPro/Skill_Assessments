import { configureStore } from "@reduxjs/toolkit";
import UserDataSlice from "./UserDataSlice/UserDataSlice";

// import counterReducer from "./counter/counterSlice";
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export default configureStore({
  reducer: {
    userData: UserDataSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
