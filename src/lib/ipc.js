/**
 * Inter Process Communication
 */
 class IPC {
    constructor(systemName, externalResponseEngine) {
        this._callbacks = {};
        this._idStart = -1;
        this._systemName = systemName + "";
        addEventListener(this._systemName, (event) => this._respondToMessage(event, externalResponseEngine))
    }

    _respondToMessage(event, externalResponseEngine) {
        let extractedCallbackName = event.detail.IPC0_sender + event.detail.IPC0_responseTo;
        if (externalResponseEngine) {
            externalResponseEngine(event.detail);//External Response Engine Hooks into and Processes Event before Callback (Promise Touches it)
        }
        if (this._callbacks[extractedCallbackName]) {
            this._callbacks[extractedCallbackName](event.detail);
            delete this._callbacks[extractedCallbackName];
        }
    }

    send(system, messageObject) {
        return new Promise((resolve, reject) => {
            let message = this._createMessage(system, messageObject);
            let extractedCallbackName = message.IPC0_target + message.IPC0_id;
            this._callbacks[extractedCallbackName] = (data) => {
                if (!data || data.shouldReject){
                    reject(data.payload);
                } 
                resolve(data.payload);
            };
            window.dispatchEvent(new CustomEvent(system, {detail: message}));
        });
    }


    respondTo(recievedMessageObject, messageObject, shouldReject) {
        let message = this._createResponse(recievedMessageObject, messageObject);
        if (shouldReject) {
            message.shouldReject = true;
        }
        window.dispatchEvent(new CustomEvent(message.IPC0_target,{detail:message}));
    }

    _createResponse(recievedMessageObject,messageObject){
        let message = {
            IPC0_target: recievedMessageObject.IPC0_sender,
            IPC0_sender: this._systemName,
            payload: messageObject,
            IPC0_responseTo: recievedMessageObject.IPC0_id,
            IPC0_id: this._getID(),
            shouldReject: false
        };
        return message;
    }

    _createMessage(targetSystem, messageObject) {
        let message = {
            IPC0_target: targetSystem,
            IPC0_sender: this._systemName,
            payload: messageObject,
            IPC0_responseTo: -1,
            IPC0_id: this._getID(),
            shouldReject: false
        };
        return message;
    }

    _getID() {
        this._idStart += 1;
        return this._idStart;
    }
}

module.exports = {
    IPC
};