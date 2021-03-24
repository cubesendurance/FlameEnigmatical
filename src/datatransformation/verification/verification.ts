import { v0 } from "../export/v0";
import { secondFactor, v1 } from "../export/v1";
import { validate, version } from 'uuid';
/**
 * Verify valid format
 * @param jsonObject 
 * @returns 
 */
export function isValidFormat(jsonObject: any): boolean {
    return v1Format(jsonObject);
}

export function canUpgrade(jsonObject: any): boolean {
    return v0Format(jsonObject);
}
/**
 * @deprecated Will be removed in 0.1.0
 * @param jsonObject JSON array to test
 * @returns true if valid v0 foramt and false otherwise
 */
function v0Format(jsonObject: any): boolean {
    if (Array.isArray(jsonObject)) {
        let arrayOfJsonObjects = jsonObject as v0[];
        // Quick check to see if first object is correct type, assume rest of objects
        // are also same. 
        if (arrayOfJsonObjects.length === 0) return true;
        return (typeof arrayOfJsonObjects[0].account === 'string' &&
            typeof arrayOfJsonObjects[0].service === 'string' &&
            ((typeof arrayOfJsonObjects[0].notes === 'string') || (arrayOfJsonObjects[0].notes == null)) &&
            Number(arrayOfJsonObjects[0].version) === 0)
    } else {
        return false;
    }
}

/**
 * @private currently exported to allow testing until @see v0Format is removed.
 * @param jsonObject JSON array to test
 * @returns true if a valid v1 format and false otherwise
 */
export function v1Format(jsonObject: any): boolean {
    if (Array.isArray(jsonObject)) {
        let arrayOfJsonObjects = jsonObject as v1[];
        // Quick check to see if first object is correct type, assume rest are also
        // the same
        if (arrayOfJsonObjects.length === 0) return true;
        let firstItem = arrayOfJsonObjects[0];
        return (
            isUUID(firstItem.uuid) &&
            typeof firstItem.service === 'string' &&
            typeof firstItem.account === 'string' &&
            typeof firstItem.password === 'string' &&
            isSecondFactor(firstItem.secondFactor) &&
            typeof firstItem.notes === 'string' &&
            isStringArray(firstItem.urls) &&
            Number(firstItem.version) === 1
        )
    } else {
        return false;
    }
}

function isUUID(uuid: string): boolean {
    return validate(uuid) && version(uuid) === 4;
}

function isSecondFactor(item: secondFactor): boolean {
    return (
        typeof item.isTrue2FA === 'boolean' &&
        typeof item.secret === 'string'
    )
}

export function isStringArray(stringArray: string[]): boolean {
    if(Array.isArray(stringArray)){
        if(stringArray.length === 0 ){
            return true;
        } else {
            for(let i = 0; i < stringArray.length; i++){
                if(typeof stringArray[i] !== 'string'){
                    return false;
                }
            }
            return true;
        }
    } else {
        return false;
    }
}