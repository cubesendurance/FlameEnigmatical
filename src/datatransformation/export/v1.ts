export type v1 = {
    //The UUID (way of refering to secret entry without relying on indexes and such)
    uuid:string,

    //The name of this entry
    service: string,

    //The account username, handle or email
    account: string,

    //The password or passphrase for the account
    password: string,

    secondFactor: secondFactor

    //Notes
    notes: string,

    //URL's for matching login to
    urls: string[],

    //Everything else (this allows incremental updates)
    raw: {
        //Attempt to link in folder names and other cross linked items without balloning up the size
        partial: any,
    },

    //Which version of this file are we dealing with
    version: 1
}

/**
 * Many sites now use a second factor some using actual 2FA
 * Others using another phrase or security questions
 * This format covers both cases in one area
 */
export type secondFactor = {
    isTrue2FA: boolean,
    secret: string
}