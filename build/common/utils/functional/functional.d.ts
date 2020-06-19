import { Fn } from "../general/general";
export declare type RequireOnly<T, K extends keyof T> = Pick<T, K> & Partial<T>;
export declare type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
export declare type Nullary<R> = () => R;
export declare type Unary<T, R> = (arg: T) => R;
export declare type Binary<T, T2, R> = (arg: T, arg2: T2) => R;
export declare type Ternary<T, T2, T3, R> = (arg: T, arg2: T2, arg3: T3) => R;
export declare type Predicate<T> = Unary<T, boolean>;
export declare function noop(...args: any[]): any;
export declare const identity: <T>(x: T) => T;
export declare const constant: <T>(val: T) => Nullary<T>;
export declare const compose: <A, B, C>(f: Unary<A, B>, g: Unary<B, C>) => Unary<A, C>;
export declare function cons<T>(coll: T[], element: T): T[];
export declare function zip<T, U>(xs: T[], ys: U[]): Array<[T, U]>;
export declare function flatMap<T, S>(coll: T[], mapper: Binary<T, number, S[]>): S[];
export declare function concatTruthy<T>(...elements: T[]): T[];
export declare function mapTruthy<T, S>(coll: T[], f: Binary<T, number, S>): S[];
export declare function thread(x: any, ...fns: Function[]): any;
export declare function threadNullable(x: any, ...fns: Function[]): any;
export declare function threadConditionally(x: any, ...fns: Function[]): any;
export declare function complement<T>(p: Predicate<T>): Predicate<T>;
export declare function range(from: number, to: number): number[];
export declare function debounceWithPromise<T extends (...args: any[]) => any>(fn: T, ms: number): ((...args: any[]) => Promise<any>) & {
    cancel: Fn;
};