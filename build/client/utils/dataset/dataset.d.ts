import { Timezone } from "chronoshift";
import { Dataset, NumberRange, TimeRange } from "plywood";
import { Split } from "../../../common/models/split/split";
declare type Order<D> = (a: [string, number, D], b: [string, number, D]) => number;
export declare const orderByValueDecreasing: Order<unknown>;
export declare const orderByValueIncreasing: Order<unknown>;
export declare const orderByTimeDimensionDecreasing: Order<TimeRange>;
export declare const orderByTimeDimensionIncreasing: Order<TimeRange>;
export declare const orderByNumberRangeDimensionDecreasing: Order<NumberRange>;
export declare const orderByNumberRangeDimensionIncreasing: Order<NumberRange>;
export declare const fillDatasetWithMissingValues: (dataset: Dataset, measureName: string, secondSplit: Split, timezone: Timezone) => Dataset;
export {};
