export type v0 = {
    //The name of this entry
    service: string,

    //The account username, handle or email
    account: string,

    //The TOTP token
    secret: string,

    //Notes
    notes: string,

    //Everything else (this allows incremental updates)
    raw: {

        //Truely raw entry (may miss out on interconnected data that is lost (such as folder name and such))
        truely: any,

        //Attempt to link in folder names and other cross linked items without balloning up the size
        partial: any,
    },

    //Which version of this file are we dealing with
    version: 0
}