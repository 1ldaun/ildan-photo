import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPicture } from "../../models/IPicture";

interface PictureState {
	pictures: IPicture[];
	isLoading: boolean;
}

const initialState: PictureState = {
	pictures: [],
	isLoading: false,
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
			state.pictures = action.payload;
		},
		picturesFetchingFailed(state, action: PayloadAction<string>) {
			state.isLoading = true;
		},
	},
});

export default pictureSlice.reducer;
