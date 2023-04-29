import {AppDispatch} from "../store";
import axios from "axios";
import {pictureSlice} from "./PictureSlice";
import {tabsSlice} from "./TabsSlice";


export const mainEndPoint = "https://ildan-dev.ru/shared/"

export const fetchPictures = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(pictureSlice.actions.usersFetching);
        const response = await axios.get<string>(mainEndPoint + "photos-config.json");
        console.log("!", JSON.parse(JSON.stringify(response.data)));
        dispatch(pictureSlice.actions.usersFetchingSuccess(JSON.parse(JSON.stringify(response.data))));
    }
    catch (e) {
        dispatch(pictureSlice.actions.usersFetchingFailed("error"));
    }
}

export const nextTab = () => (dispatch: AppDispatch) => {
    dispatch(tabsSlice.actions.nextTab());
};

export const prevTab = () => (dispatch: AppDispatch) => {
    dispatch(tabsSlice.actions.prevTab());
};

export const setTab = () => (dispatch: AppDispatch, tabNumber: number) => {
    dispatch(tabsSlice.actions.setTab(tabNumber));
}