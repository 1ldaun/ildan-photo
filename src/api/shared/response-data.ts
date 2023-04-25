export type DataItem<T extends Object> = [T] | Array<T>;

export type ResponseData<D> = { [key in keyof D]: any};

export type ResponseItemWrapper<T> = T | null | undefined;