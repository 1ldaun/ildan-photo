import {CommonDataState, createCommonDataSlice} from "./common-data";

export interface TabsInfoState extends CommonDataState {}

export const tabsInfoSlice = createCommonDataSlice<TabsInfoState>({
    name: "tabsInfoSlice",
})