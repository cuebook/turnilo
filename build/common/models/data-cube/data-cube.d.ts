import { Duration, Timezone } from "chronoshift";
import { List, OrderedSet } from "immutable";
import { Instance } from "immutable-class";
import { AttributeJSs, Attributes, CustomDruidAggregations, CustomDruidTransforms, Dataset, DatasetFullType, Executor, Expression, ExpressionJS, External, RefExpression } from "plywood";
import { Cluster } from "../cluster/cluster";
import { Dimension } from "../dimension/dimension";
import { DimensionOrGroupJS } from "../dimension/dimension-group";
import { Dimensions } from "../dimension/dimensions";
import { Filter } from "../filter/filter";
import { Measure, MeasureJS } from "../measure/measure";
import { MeasureOrGroupJS } from "../measure/measure-group";
import { Measures } from "../measure/measures";
import { RefreshRule, RefreshRuleJS } from "../refresh-rule/refresh-rule";
import { Splits } from "../splits/splits";
import { Timekeeper } from "../timekeeper/timekeeper";
export declare type Introspection = "none" | "no-autofill" | "autofill-dimensions-only" | "autofill-measures-only" | "autofill-all";
export declare type Source = string | string[];
export interface DataCubeValue {
    name: string;
    title?: string;
    description?: string;
    extendedDescription?: string;
    clusterName: string;
    source: Source;
    group?: string;
    subsetFormula?: string;
    rollup?: boolean;
    options?: DataCubeOptions;
    introspection?: Introspection;
    attributeOverrides?: Attributes;
    attributes?: Attributes;
    derivedAttributes?: Record<string, Expression>;
    dimensions?: Dimensions;
    measures?: Measures;
    timeAttribute?: RefExpression;
    defaultTimezone?: Timezone;
    defaultFilter?: Filter;
    defaultSplitDimensions?: List<string>;
    defaultDuration?: Duration;
    defaultSortMeasure?: string;
    defaultSelectedMeasures?: OrderedSet<string>;
    defaultPinnedDimensions?: OrderedSet<string>;
    refreshRule?: RefreshRule;
    maxSplits?: number;
    maxQueries?: number;
    cluster?: Cluster;
    executor?: Executor;
}
export interface DataCubeJS {
    name: string;
    title?: string;
    description?: string;
    extendedDescription?: string;
    clusterName: string;
    source: Source;
    group?: string;
    subsetFormula?: string;
    rollup?: boolean;
    options?: DataCubeOptions;
    introspection?: Introspection;
    attributeOverrides?: AttributeJSs;
    attributes?: AttributeJSs;
    derivedAttributes?: Record<string, ExpressionJS>;
    dimensions?: DimensionOrGroupJS[];
    measures?: MeasureOrGroupJS[];
    timeAttribute?: string;
    defaultTimezone?: string;
    defaultFilter?: any;
    defaultSplitDimensions?: string[];
    defaultDuration?: string;
    defaultSortMeasure?: string;
    defaultSelectedMeasures?: string[];
    defaultPinnedDimensions?: string[];
    refreshRule?: RefreshRuleJS;
    maxSplits?: number;
    maxQueries?: number;
}
export interface DataCubeOptions {
    customAggregations?: CustomDruidAggregations;
    customTransforms?: CustomDruidTransforms;
    druidContext?: Record<string, any>;
}
export interface DataCubeContext {
    cluster?: Cluster;
    executor?: Executor;
}
export interface LongForm {
    metricColumn: string;
    possibleAggregates: Record<string, any>;
    addSubsetFilter?: boolean;
    measures: Array<MeasureJS | LongFormMeasure>;
}
export interface LongFormMeasure {
    aggregate: string;
    value: string;
    title: string;
    units?: string;
}
export declare class DataCube implements Instance<DataCubeValue, DataCubeJS> {
    static DEFAULT_INTROSPECTION: Introspection;
    static INTROSPECTION_VALUES: Introspection[];
    static DEFAULT_DEFAULT_TIMEZONE: Timezone;
    static DEFAULT_DEFAULT_FILTER: Filter;
    static DEFAULT_DEFAULT_SPLITS: Splits;
    static DEFAULT_DEFAULT_DURATION: Duration;
    static DEFAULT_MAX_SPLITS: number;
    static DEFAULT_MAX_QUERIES: number;
    static isDataCube(candidate: any): candidate is DataCube;
    static queryMaxTime(dataCube: DataCube): Promise<Date>;
    static fromClusterAndExternal(name: string, cluster: Cluster, external: External): DataCube;
    static fromJS(parameters: DataCubeJS, context?: DataCubeContext): DataCube;
    name: string;
    title: string;
    description: string;
    extendedDescription: string;
    clusterName: string;
    source: Source;
    group: string;
    subsetFormula: string;
    subsetExpression: Expression;
    rollup: boolean;
    options: DataCubeOptions;
    introspection: Introspection;
    attributes: Attributes;
    attributeOverrides: Attributes;
    derivedAttributes: Record<string, Expression>;
    dimensions: Dimensions;
    measures: Measures;
    timeAttribute: RefExpression;
    defaultTimezone: Timezone;
    defaultFilter: Filter;
    defaultSplitDimensions: List<string>;
    defaultDuration: Duration;
    defaultSortMeasure: string;
    defaultSelectedMeasures: OrderedSet<string>;
    defaultPinnedDimensions: OrderedSet<string>;
    refreshRule: RefreshRule;
    maxSplits: number;
    maxQueries: number;
    cluster: Cluster;
    executor: Executor;
    constructor(parameters: DataCubeValue);
    valueOf(): DataCubeValue;
    toJS(): DataCubeJS;
    toJSON(): DataCubeJS;
    toString(): string;
    private equalsSource;
    equals(other: DataCube): boolean;
    private parseDescription;
    private _validateDefaults;
    toExternal(): External;
    getMainTypeContext(): DatasetFullType;
    getIssues(): string[];
    updateCluster(cluster: Cluster): DataCube;
    updateWithDataset(dataset: Dataset): DataCube;
    updateWithExternal(external: External): DataCube;
    attachExecutor(executor: Executor): DataCube;
    toClientDataCube(): DataCube;
    isQueryable(): boolean;
    getMaxTime(timekeeper: Timekeeper): Date;
    getDimension(dimensionName: string): Dimension;
    getDimensionByExpression(expression: Expression): Dimension;
    getDimensionsByKind(kind: string): Dimension[];
    getSuggestedDimensions(): Dimension[];
    getTimeDimension(): Dimension;
    isTimeAttribute(ex: Expression): boolean;
    getMeasure(measureName: string): Measure;
    getSuggestedMeasures(): Measure[];
    changeDimensions(dimensions: Dimensions): DataCube;
    rolledUp(): boolean;
    deduceAttributes(): Attributes;
    addAttributes(newAttributes: Attributes): DataCube;
    getIntrospection(): Introspection;
    getDefaultTimezone(): Timezone;
    getDefaultFilter(): Filter;
    getDefaultSplits(): Splits;
    getDefaultDuration(): Duration;
    getDefaultSortMeasure(): string;
    getMaxSplits(): number;
    getMaxQueries(): number;
    getDefaultSelectedMeasures(): OrderedSet<string>;
    getDefaultPinnedDimensions(): OrderedSet<string>;
    change(propertyName: string, newValue: any): DataCube;
    changeDefaultSortMeasure(defaultSortMeasure: string): DataCube;
    changeTitle(title: string): DataCube;
    changeDescription(description: string): DataCube;
    changeMeasures(measures: List<Measure>): DataCube;
}
