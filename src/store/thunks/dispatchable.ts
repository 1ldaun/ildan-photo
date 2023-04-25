import {AppDispatch} from "../store";

export type DispatchableFn<T extends (...args: any) => Promise<any>> = T extends () => any
    ? (dispatch: AppDispatch) => Promise<unknown>
    : T extends (...args: infer P) => any;

export type Dispatchable<T extends { [key: string]: any}> = {
    [K in keyof T]: DispatchableFn<T[K]>;
}