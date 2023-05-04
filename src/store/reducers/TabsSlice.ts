import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TabsState {
	currentTab: number;
	tabsCount: number;
	tabIsLoading: boolean;
}

const initialState: TabsState = {
	currentTab: 0,
	tabsCount: 0,
	tabIsLoading: false,
};

export const tabsSlice = createSlice({
	name: "tabs",
	initialState,
	reducers: {
		nextTab(state) {
			if (state.currentTab + 1 === state.tabsCount) state.currentTab = 0;
			else state.currentTab += 1;
		},
		prevTab(state) {
			if (state.currentTab === 0) state.currentTab = state.tabsCount - 1;
			else state.currentTab -= 1;
		},
		setTab(state, action: PayloadAction<number>) {
			if (action.payload < state.tabsCount)
				state.currentTab = action.payload;
		},
		setTabsCount(state, action: PayloadAction<number>) {
			state.tabsCount = action.payload;
		},
		switchIsLoading(state) {
			state.tabIsLoading = !state.tabIsLoading;
		},
	},
});

export default tabsSlice.reducer;
