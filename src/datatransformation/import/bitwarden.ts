/**
 * Utilities to detect and convert from the legendary bitwarden password manager JSON format.
 */

import { v4 } from "uuid";
import { v1 } from "../export/v1";

export function isBitwardenFormat(jsonObject: any): boolean {
    return jsonObject["folders"] && jsonObject["items"];
}

export function convertFromBitwardenFormat(jsonObject: any): v1[] {
    let v1Entries: v1[] = [];
    let folderMapping: folderMapping = {};
    //We construct folder mapping
    for (let i = 0; i < jsonObject["folders"].length; i++) {
        folderMapping[jsonObject["folders"][i]["id"]] = jsonObject["folders"][i]["name"];
    }

    for (let i = 0; i < jsonObject["items"].length; i++) {
        let entry: v1 = {
            uuid: v4(),
            service: jsonObject["items"][i]["name"] || '',
            account: jsonObject["items"][i]["login"]["username"] || '',
            password: jsonObject["items"][i]["login"]["password"] || '',
            secondFactor:{
                isTrue2FA: jsonObject["items"][i]['login']['totp'] ? true : false,
                secret: jsonObject["items"][i]['login']['totp'] || ''
            },
            notes: jsonObject["items"][i]["notes"] || '',
            urls: convertToUrls(jsonObject['items'][i]['login']['uris']),
            raw: {
                partial: jsonObject["items"][i]
            },
            version: 1
        };

        entry.raw.partial["folder"] = folderMapping[entry.raw.partial["folderId"]] as string;

        v1Entries.push(entry);
    }

    return v1Entries;
}

type folderMapping = {
    [key: string]: string
}

/**
 * Returns list of url's [url1, url2... urlN]
 * @param jsonSubset the Bitwarden URI's format
 */
export function convertToUrls(jsonSubset: any){
    if(!jsonSubset) return [];
    let returned:string[] = [];
    for(let i = 0; i < jsonSubset.length; i++){
        returned.push(jsonSubset[i]['uri']);
    }
    return returned;
}

// figure out render issue AFTER migration
// make sure adding works correctly
// make sure UI still works (plug in from new locations)