/**
 * Utilities to detect and convert from the legendary bitwarden password manager JSON format.
 */

export function isBitwardenFormat(jsonObject: JSON): boolean {
    return jsonObject["folders"] && jsonObject["items"];
}

export function convertFromBitwardenFormat(jsonObject: JSON): v0[] {
    let v0Entries: v0[] = [];
    let folderMapping: folderMapping = {};
    //We construct folder mapping
    for (let i = 0; i < jsonObject["folders"].length; i++) {
        folderMapping[jsonObject["folders"][i]["id"]] = jsonObject["folders"][i]["name"];
    }

    for (let i = 0; i < jsonObject["items"].length; i++) {
        let entry: v0 = {
            service: jsonObject["items"][i]["name"],
            account: jsonObject["items"][i]["login"]["username"],
            secret: jsonObject["items"][i]["totp"],
            notes: jsonObject["items"][i]["notes"],
            raw: {
                truely: jsonObject["items"][i],
                partial: jsonObject["items"][i]
            },
            version: 0
        };

        entry.raw.partial["folder"] = folderMapping[entry.raw.truely["folderId"]];

        v0Entries.push(entry);
    }

    return v0Entries;
}

type folderMapping = {
    [key: string]: string
}