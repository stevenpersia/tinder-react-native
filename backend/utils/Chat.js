const crypto = require('crypto');

class Message {
    constructor(user, msg) {
        this.user = user;
        this.msg = msg;
    }
}

class Chat {

    constructor(user1, user2) {
        this.user1 = user1;
        this.user2 = user2;
        this.uid = crypto.createHash('sha256').update(user1).update(user2).digest('hex');

        this.messages = [];
    }

    newMessage(user, msg) {
        this.messages.push(new Message(user, msg));
    }
}

module.exports.Chat = Chat;
