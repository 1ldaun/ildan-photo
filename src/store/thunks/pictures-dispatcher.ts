import {AppDispatch} from "../store";
import {createDispatchFn} from "./dispatch-utils";
import {PicturesApi, picturesApi} from "../../api/pictures-api";
import {Dispatchable} from "./dispatchable";

export const picturesDispatcher: Dispatchable<PicturesApi> = {
    picturesGetData(params: {}): (dispatch: AppDispatch) => Promise<unknown> {
        return createDispatchFn(() => picturesApi.getPictures(params));
    }
}