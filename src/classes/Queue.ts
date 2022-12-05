import Store from "../modules/Store.js";
import __internal__ from "../helpers/internal.js";

var _privates = new WeakMap();
class Queue {
    items: any[];
    constructor(data: any, trucate: boolean = false) {
        if (!!trucate && typeof this.items !== "string") {
            __internal__(_privates, this, {
                store: Object.create(Store),
            })
        }
    }
    enqueue(item: any){
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    clear() {
        this.items.length = 0;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    
}
export default Queue;
