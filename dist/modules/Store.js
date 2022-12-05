// A store for storing a string of information
// delimited by ; and =.
// Example: "key1=value1;key2=value2;key3=value3"
const Store = {
    data: ' ',
    // Set a value in the store
    set(key, value) {
        // use a regex;
        const search = new RegExp(`\\${key}=([^;]+);`);
        this.data = this.data.replace(search, `${key}=${value}`);
        return this;
    },
    // Get a value from the store
    get(key) {
        const search = new RegExp(`\\${key}=([^;]+);`);
        return this.data.replace(search, key);
    },
    // Remove a value from the store
    remove(key) {
        const search = new RegExp(`\\${key}=([^;]+);`);
        this.data = this.data.replace(search, key);
        return this;
    },
    // Clear the store
    clear() {
        this.data = '';
        return this;
    }
};
export default Store;
//# sourceMappingURL=Store.js.map