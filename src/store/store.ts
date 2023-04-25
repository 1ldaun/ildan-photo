import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { pictureSlice } from "./slices/pictures";
import { tabsInfoSlice } from "./slices/tabs-info";
import { createDispatchHook, ReactReduxContextValue } from "react-redux";
import { createContext } from "react";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    pictures: pictureSlice.reducer,
    tabsInfo: tabsInfoSlice.reducer,
  },
});

export const AppContext = createContext<ReactReduxContextValue<RootState>>(
  {} as ReactReduxContextValue<RootState>
);

export const useAppDispatch = createDispatchHook<RootState, any>(AppContext);

export default store;
