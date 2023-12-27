import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slice/toysSlice";
import treeReducer from "./slice/treeSlice";
export const store = configureStore({
  reducer: {
    toys: filterReducer,
    tree: treeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
