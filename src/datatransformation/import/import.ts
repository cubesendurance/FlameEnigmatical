import { v0 } from "../export/v0";
import { convertFromBitwardenFormat, isBitwardenFormat } from "./bitwarden";

export function importJSON(jsonObject: JSON): ImportStatusAndContent {
    let output: v0[] = [];
    let foundParser: boolean = true;
    if (isBitwardenFormat(jsonObject)) {
        output = convertFromBitwardenFormat(jsonObject);
    } else {
        foundParser = false;
    }

    return [output, foundParser];
}

/**
 * @exported {v0} The exported content. Note this is extra stage here setups of the rest 
 * of the program to be extremely flexible in parsing and changes in the future
 * 
 * @didSucceedAtParsing {boolean} In the event that it didn't exported value is []
 */
type ImportStatusAndContent = [exported: v0[], didSucceedAtParsing: boolean]