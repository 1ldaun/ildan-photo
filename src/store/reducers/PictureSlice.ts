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
		picturesFetching(state) {
			state.isLoading = true;
		},
		picturesFetchingSuccess(state, action: PayloadAction<IPicture[]>) {
			state.isLoading = true;
			state.error = "";
			state.pictures = action.payload;
		},
		picturesFetchingFailed(state, action: PayloadAction<string>) {
			state.isLoading = true;
			state.error = action.payload;
		},
	},
});

export default pictureSlice.reducer;
