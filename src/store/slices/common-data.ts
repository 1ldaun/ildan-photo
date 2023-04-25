import {PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers, Slice, createSlice} from "@reduxjs/toolkit";
import {ApiResponse} from "../../api/api-response";
import {MainLayoutData} from "../../api/shared/main-layout-data";

export interface CommonDataState {
    data: MainLayoutData;
}

export const defaultCommonDataState = <T extends CommonDataState>(): T => {
    return {
        data: {}
    } as T;
};

export const defaultCommonDataReducers = <T extends CommonDataState>(
    defaultState: () => T
): ValidateSliceCaseReducers<T, SliceCaseReducers<T>> => {
    return {
        clear(state: T, action: PayloadAction<unknown>): T {
            return defaultState();
        },
        fill(state: T, action: PayloadAction<ApiResponse<MainLayoutData>>): T {
            const { data } = action.payload;
            return { data } as T;
        }
    } as ValidateSliceCaseReducers<T, SliceCaseReducers<T>>;
};

export interface CommonDataSliceOptions<T extends CommonDataState> {
    name: string;
    defaultState?: () => T;
    reducers?: ValidateSliceCaseReducers<T, SliceCaseReducers<T>>;
}

export type CommonDataSlice<T extends CommonDataState> = Slice<T, SliceCaseReducers<T>>;

export const createCommonDataSlice = <T extends CommonDataState>(
    opts: CommonDataSliceOptions<T>
): CommonDataSlice<T> => {
    const name = opts.name;
    const defaultState = opts.defaultState || defaultCommonDataState;
    const reducers = { ...defaultCommonDataReducers(defaultState), ...(opts.reducers || {}) };
    return createSlice({
        name,
        initialState: defaultState(),
        reducers,
    })
}