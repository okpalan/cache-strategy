export { };
export as namespace Cache;

/**
 * The cache will be cleared when the application is closed.
 * This is the default value.
 * @type {number}
 */
export enum Stratergy {
    AUTO,
    FIFO,
    LIFO,
    LRU,
    LFD,
    MRU,
    LFU
}

 declare abstract class AbstractCache {
    constructor(stratergy: Stratergy, size:number,truncate:boolean | undefined);
    constructor(stratergy: Stratergy, size:number,value:number);
    constructor(stratergy: Stratergy, size:number,cb:Function);
    abstract get(key: string): any;
    abstract set(key: string, value: any,trucate:boolean): void;
    abstract delete(key: string): void;
    abstract has(key: string): boolean;
    abstract clear(): void;
    abstract size: number
    abstract truncate(key: string): void;
}

export default class Cache implements AbstractCache {
    constructor(stratergy: Stratergy, cache);
    constructor(stratergy: Stratergy, size:number, value:number);
    constructor(stratergy: Stratergy, size:number,cb:Function);
    size: number;
    get(key: string);
    set(key: string, value: any,trucate:boolean): void;
    delete(key: string): void;
    has(key: string): boolean;
    clear(): void;
    truncate(key: string): void;
}

