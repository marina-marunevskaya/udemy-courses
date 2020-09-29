// standard module pattern
const standardUIControl = (function () {
    let text = 'Hello World';

    const changeText = function () {
        const element = document.getElementById('header');
        element.textContent = text;
    }

    return {
        change: function () {
            changeText();
            console.log(text);
        }
    };
})();

standardUIControl.change();

// revealing module pattern
const revealingItemController = (function () {
    let data = [];

    function add (item) {
        data.push(item);
        console.log('Item was added!');
    }

    function get (id) {
        return data.find(item => item.id === id);
    }

    return {
        add: add,
        get: get
    };
})();

revealingItemController.add({
    id: 1,
    name: 'Mary'
});

revealingItemController.add({
    id: 2,
    name: 'Jack'
});

console.log(revealingItemController.get(1));
console.log(revealingItemController.get(2));
