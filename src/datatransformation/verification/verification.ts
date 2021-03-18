import { v0 } from "../export/v0";

/**
 * Verify valid format
 * @param jsonObject 
 * @returns 
 */
export function isValidFormat(jsonObject: any): boolean {
    return v0Format(jsonObject);
}

function v0Format(jsonObject: any): boolean {
    if (Array.isArray(jsonObject)) {
        let arrayOfJsonObjects = jsonObject as v0[];
        // Quick check to see if first object is correct type, assume rest of objects
        // are also same. 
        if (arrayOfJsonObjects.length === 0) return true;
        return (typeof arrayOfJsonObjects[0].account === 'string' &&
            typeof arrayOfJsonObjects[0].service === 'string' &&
            typeof arrayOfJsonObjects[0].notes === 'string' &&
            Number(arrayOfJsonObjects[0].version) === 1)
    } else {
        return false;
    }
}