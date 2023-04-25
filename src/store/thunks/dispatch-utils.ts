import { ResponseData } from "../../api/shared/response-data";
import { ApiResponse } from "../../api/api-response";
import { AppDispatch } from "../store";
import {globalIndicatorFactory} from "./global-indicator";
import {updateData} from "./update-store";

export const baseDispatchFn = async <R extends ResponseData<R>>(
    dispatch: AppDispatch,
    method: () => Promise<ApiResponse<R>>
) => {
    const indicator = globalIndicatorFactory.create(dispatch);
    indicator.showIndicator();
    try {
        const apiResponse = await method();
        indicator.hideIndicator();
        return apiResponse
    } catch (e) {
        indicator.hideIndicator();
        throw new Error("baseDispatchFn error!");
    }
}

export const createDispatchFn =
    <R extends ResponseData<R>>(
        method: () => Promise<ApiResponse<R>>,
        isClearBeforeFill?: boolean,
    ) =>
        async (dispatch: AppDispatch) => {
    try {
        const response = await baseDispatchFn(dispatch, method);
        dispatch(updateData(response, isClearBeforeFill));
    } catch (e) {
    }
    }