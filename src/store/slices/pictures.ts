import {CommonDataState, createCommonDataSlice} from "./common-data";

export interface PicturesState extends CommonDataState {}

export const pictureSlice = createCommonDataSlice<PicturesState>({
    name: "picturesSlice",
})