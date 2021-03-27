import { v4 } from 'uuid';
import { isStringArray, v1Format } from './verification';
import { expect } from 'chai';

describe('V1 verification', function(){
    it('should return false on empty object', function(){
        expect(v1Format({})).to.be.false;
    })

    it('should return true for a valid v4 that contains no data', function(){
        expect(v1Format([{
            uuid:v4(),
            service: "random service",
            account: "",
            password: "",
            secondFactor: {
                isTrue2FA: false,
                secret: ""
            },
            notes: "",
            urls: [],
            version: 1
        }])).to.be.true
    })

    it('should return false if v0 object', function(){
        expect(v1Format([{
            "service": "another random service",
            "account": "some account",
            "secret": "",
            "notes": "",
            "version": 0
        }])).to.be.false;
    })

    it('should return false if url\'s are not an array', function(){
        expect(v1Format([{
            uuid:v4(),
            service: "random service",
            account: "",
            password: "",
            secondFactor: {
                isTrue2FA: false,
                secret: ""
            },
            notes: "",
            urls: 'wolf',
            version: 1
        }])).to.be.false
    })

    it('should return false if url\'s are not an array of strings', function(){
        expect(v1Format([{
            uuid:v4(),
            service: "random service",
            account: "",
            password: "",
            secondFactor: {
                isTrue2FA: false,
                secret: ""
            },
            notes: "",
            urls: ['wolf','string', true],
            version: 1
        }])).to.be.false
    })
})

export {}
