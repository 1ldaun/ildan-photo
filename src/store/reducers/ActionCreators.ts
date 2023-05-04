import { AppDispatch } from "../store";
import axios from "axios";
import { pictureSlice } from "./PictureSlice";
import { tabsSlice } from "./TabsSlice";

export const mainEndPoint = "https://ildan-dev.ru/shared/";

export const fetchPictures = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(pictureSlice.actions.usersFetching);
		const response = await axios.get<string>(
			mainEndPoint + "photos-config.json",
		);
		const data = JSON.parse(JSON.stringify(response.data));
		dispatch(pictureSlice.actions.usersFetchingSuccess(data));
		dispatch(tabsSlice.actions.setTabsCount(data.length));
	} catch (e) {
		dispatch(pictureSlice.actions.usersFetchingFailed("error"));
	}
};

export const nextTab = () => (dispatch: AppDispatch) => {
	dispatch(tabsSlice.actions.switchIsLoading());
	setTimeout(() => dispatch(tabsSlice.actions.nextTab()), 200);
	setTimeout(() => dispatch(tabsSlice.actions.switchIsLoading()), 215);
};

export const prevTab = () => (dispatch: AppDispatch) => {
	dispatch(tabsSlice.actions.switchIsLoading());
	setTimeout(() => dispatch(tabsSlice.actions.prevTab()), 200);
	setTimeout(() => dispatch(tabsSlice.actions.switchIsLoading()), 215);
};

export const setTab = () => (dispatch: AppDispatch, tabNumber: number) => {
	dispatch(tabsSlice.actions.switchIsLoading());
	setTimeout(() => dispatch(tabsSlice.actions.setTab(tabNumber)), 200);
	setTimeout(() => dispatch(tabsSlice.actions.switchIsLoading()), 215);
};
