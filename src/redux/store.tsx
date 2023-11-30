import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/cartSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
} as { key: string; storage: any };

const rootReducer = combineReducers({
  cart: cartReducer,
  // notes: NotesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
