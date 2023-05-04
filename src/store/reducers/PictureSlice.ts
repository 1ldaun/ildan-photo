import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPicture } from "../../models/IPicture";

interface PictureState {
	pictures: IPicture[];
	isLoading: boolean;
	error: string;
}

const initialState: PictureState = {
	pictures: [],
	isLoading: false,
	error: "",
};

export const pictureSlice = createSlice({
	name: "picture",
	initialState,
	reducers: {
		usersFetching(state) {
			state.isLoading = true;
		},
		usersFetchingSuccess(state, action: PayloadAction<IPicture[]>) {
			state.isLoading = true;
			state.error = "";
			state.pictures = action.payload;
		},
		usersFetchingFailed(state, action: PayloadAction<string>) {
			state.isLoading = true;
			state.error = action.payload;
		},
	},
});

export default pictureSlice.reducer;
