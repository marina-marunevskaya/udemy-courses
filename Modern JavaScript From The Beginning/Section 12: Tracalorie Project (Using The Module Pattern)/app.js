// Item Controller
const ItemController = (function () {
    // Item Constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    };

    // Data Structure / State
    const data = {
        items: [
            {
                id: 0,
                name: 'Steak',
                calories: 1200
            },
            {
                id: 1,
                name: 'Cookie',
                calories: 400
            },
            {
                id: 2,
                name: 'Eggs',
                calories: 300
            }
        ],
        currentItem: null,
        totalCalories: 0
    };

    return {
        getData: function () {
            return data;
        }
    };
})();

// Storage Controller
const StorageController = (function () {
    return {};
})();

// UI Controller
const UIController = (function () {
    return {};
})();

// App Controller
const AppController = (function (ItemController, StorageController, UIController) {
    return {
        init: function () {

        }
    };
})(ItemController, StorageController, UIController);

AppController.init();
