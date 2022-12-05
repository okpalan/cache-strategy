function internal(wm, key, value) {
    if (!wm.has(key)) {
        wm.set(key, value);
        return wm.get(key);
    }
    wm.set(key, value);
    return wm.get(key);
}
export default internal;
//# sourceMappingURL=internal.js.map