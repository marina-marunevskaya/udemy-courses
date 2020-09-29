function MemberFactory () {
    this.createMember = function (name, type) {
        let member;

        if (type === 'simple') {
            member = new SimpleMembership(name);
        } else if (type === 'standard') {
            member = new StandardMembership(name);
        } else if (type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        };

        return member;
    };
}

function SimpleMembership (name) {
    this.name = name;
    this.cost = '$5';
}

function StandardMembership (name) {
    this.name = name;
    this.cost = '$15';
}

function SuperMembership (name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];

const factory = new MemberFactory();

members.push(
    factory.createMember('Steve Johnson', 'simple')
);

members.forEach(
    member => member.define()
);

console.log('---');

members.push(
    factory.createMember('Mary Smith', 'standard')
);

members.forEach(
    member => member.define()
);

console.log('---');

members.push(
    factory.createMember('Sam Whale', 'super')
);

members.forEach(
    member => member.define()
);
