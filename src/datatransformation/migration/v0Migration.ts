import { v4 } from "uuid";
import { v0 } from "../export/v0";
import { secondFactor, v1 } from "../export/v1";
import { convertToUrls } from "../import/bitwarden";

export function migrateFromV0(oldFormat: v0[]): v1[]{
    //Currently no way to lock data in a way that promises data will be in consistent state.
    //Update to SNBridge required to make this possible
    //Look at blog.sapphirepack.org/

    let newFormat:v1[] = [];
    for(let i = 0; i < oldFormat.length; i++){
        let v1Item:v1 = {
            uuid: v4(),
            service: oldFormat[i].service || '',
            account: oldFormat[i].account || '',
            password: oldFormat[i].raw.truely.login.password || '',
            secondFactor: convertToSecondFactor(oldFormat[i].secret, oldFormat[i].raw.partial.login.totp),
            notes: oldFormat[i].notes || '',
            urls: convertToUrls(oldFormat[i].raw.truely.login.uris),
            raw: {
                partial: oldFormat[i].raw.partial
            },
            version: 1
        }
        newFormat.push(v1Item);
    }
    return newFormat;
}

function convertToSecondFactor(secret: string, totp: string|null|undefined): secondFactor{
    if(!totp){
        return {
            isTrue2FA: false,
            secret:secret || ''
        }
    } else {
        return {
            isTrue2FA: true,
            secret:secret || ''
        }
    }
}

