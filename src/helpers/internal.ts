/**
 * @param wm 
 * @param key 
 * @param value 
 * @returns 
 */
function __internal__(wm, key, value) {
    if (!wm.has(key)) {
        wm.set(key, value);
        return wm.get(key);
    }
    wm.set(key, value);
    return wm.get(key);
}
export default internal;