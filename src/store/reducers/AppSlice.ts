import { createSlice } from "@reduxjs/toolkit";

interface AppState {
	mode: "table" | "tabs";
}

const initialState: AppState = {
	mode: "tabs",
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		switchAppMode(state) {
			state.mode = state.mode === "table" ? "tabs" : "table";
		},
	},
});

export default appSlice.reducer;
