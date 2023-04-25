import {ResponseData} from "../../api/shared/response-data";
import {ApiResponse} from "../../api/api-response";
import {AppDispatch} from "../store";
import {pagesMainDataSlice} from "../slices/pages-main-data";

export const updateData =
    <R extends ResponseData<R>>(response: ApiResponse<R>, isClearBeforeFill?: boolean) =>
        (dispatch: AppDispatch) => {
            const actions = pagesMainDataSlice?.actions || undefined;

            if (actions) {
                if (isClearBeforeFill && actions.clear) {
                    dispatch(actions.clear({}));
                }
                dispatch(actions.fill(response));
            }
        };