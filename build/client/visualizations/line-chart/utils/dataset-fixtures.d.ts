import { Dataset } from "plywood";
import { ContinuousScale } from "./continuous-types";
export declare const makeDataset: (datums: any[]) => Dataset;
export declare const january: (n: number) => Date;
export declare const nonNominalDataset: Dataset;
export declare const sparseNonNominalDataset: Dataset;
export declare const nominalDataset: Dataset;
export declare const sparseNominalDataset: Dataset;
export declare const scale: ContinuousScale;
export declare function createDailyNominalDatasetInJanuary(startDay: number, endDay: number): Dataset;
