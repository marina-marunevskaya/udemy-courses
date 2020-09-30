const User = function (name) {
    this.name = name;
    this.chatroom = null;
};

User.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(`From ${from.name} to ${this.name}: ${message}`);
    }
};

const Chatroom = function () {
    let users = [];

    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function (message, from, to) {
            if (to) {
                to.receive(message, from);
            } else {
                for (let key in users) {
                    if (users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    };
};

const jack = new User('Jack');
const mary = new User('Mary');
const tom = new User('Tom');

const chatroom = new Chatroom();
chatroom.register(jack);
chatroom.register(mary);
chatroom.register(tom);

jack.send('Hello Mary', mary);
mary.send('Hey Jack', jack);
tom.send('Hello everyone!');
