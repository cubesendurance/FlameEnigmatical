import { v4 } from "uuid";
import { v1 } from "../export/v1";

export function isTokenSafeFormat(jsonObject: any): boolean {
    return jsonObject[0]["service"] && jsonObject[0]["secret"];
}

export function convertFromTokenSafe(jsonObject: any): v1[] {
    let v1Entries: v1[] = [];

    for (let i = 0; i < jsonObject.length; i++) {
        let entry: v1 = {
            uuid: v4(),
            service: jsonObject[i]['service'] || '',
            account: jsonObject[i]['account'] || '',
            password: '',
            secondFactor:{
                isTrue2FA: true,
                secret: jsonObject[i]['secret'] || ''
            },
            raw: {partial:null},
            notes: jsonObject[i]['notes'] || '',
            urls: [],
            version: 1
        };
        v1Entries.push(entry);
    }

    return v1Entries;
}