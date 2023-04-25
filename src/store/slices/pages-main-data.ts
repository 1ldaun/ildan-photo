import {CommonDataState, createCommonDataSlice} from "./common-data";

export interface PagesMainDataState extends CommonDataState {}

export const pagesMainDataSlice = createCommonDataSlice<PagesMainDataState>({
    name: "pagesMainDataSlice",
})