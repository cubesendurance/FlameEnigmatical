import { v1 } from "../export/v1";
import { convertFromBitwardenFormat, isBitwardenFormat } from "./bitwarden";
import { convertFromTokenSafe, isTokenSafeFormat } from "./tokensafe";

export function importJSON(jsonObject: JSON): ImportStatusAndContent {
    let output: v1[] = [];
    let foundParser: boolean = true;
    if (isBitwardenFormat(jsonObject)) {
        output = convertFromBitwardenFormat(jsonObject);
    } else if(isTokenSafeFormat(jsonObject)){
        output = convertFromTokenSafe(jsonObject)
    } else {
        foundParser = false;
    }

    return [output, foundParser];
}

/**
 * @exported {10} The exported content. Note this is extra stage here setups of the rest 
 * of the program to be extremely flexible in parsing and changes in the future
 * 
 * @didSucceedAtParsing {boolean} In the event that it didn't exported value is []
 */
type ImportStatusAndContent = [exported: v1[], didSucceedAtParsing: boolean]