import {ApiResponse} from "./api-response";
import {MainLayoutData} from "./shared/main-layout-data";
import {mockService} from "../store/mocks/mockService";

export type PicturesResponse = ApiResponse<MainLayoutData>;

const PICTURES = "pictures";

export interface PicturesApi {
    getPictures(params: {}): Promise<PicturesResponse>;
}

export const picturesApi: PicturesApi = {
    getPictures(params: {}): Promise<PicturesResponse> {
        return mockService(PICTURES, params) as Promise<PicturesResponse>;
    }
}