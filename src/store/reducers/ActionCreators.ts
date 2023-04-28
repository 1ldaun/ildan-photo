import {AppDispatch} from "../store";
import {IPicture} from "../../models/IPicture";
import axios from "axios";
import {pictureSlice} from "./PictureSlice";


const endPoint = "https://ildan-dev.ru/shared/"

export const fetchPictures = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(pictureSlice.actions.usersFetching);
        const response = await axios.get<IPicture[]>(endPoint + "photos-config.json");
        dispatch(pictureSlice.actions.usersFetchingSuccess(response.data));
    }
    catch (e) {
        dispatch(pictureSlice.actions.usersFetchingFailed("error"));
    }
}