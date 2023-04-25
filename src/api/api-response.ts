import {ResponseData} from "./shared/response-data";
import {ResponseStatus} from "./shared/response-status.enum";

export interface ApiResponse<DATA extends ResponseData<DATA>> {
    response: ResponseStatus;
    data: DATA
}