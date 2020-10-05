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
        },
        getItems: function () {
            return data.items;
        },
        addItem: function (name, calories) {
            const ID = data.items.length
                ? data.items[data.items.length - 1].id + 1
                : 0;

            calories = parseInt(calories);

            const newItem = new Item(ID, name, calories);

            data.items.push(newItem);

            return newItem;
        }
    };
})();

// Storage Controller
const StorageController = (function () {
    return {};
})();

// UI Controller
const UIController = (function () {
    const UISelectors = {
        itemListID: 'item-list',
        addBtnClass: '.add-btn',
        nameInputID: 'itemName',
        caloriesInputID: 'itemCalories'
    };

    return {
        showItems: function (items) {
            document.getElementById(UISelectors.itemListID).innerHTML = items.map(
                item => `
                    <li class="collection-item" id="item-${item.id}">
                        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content">
                            <span class="edit-item fa fa-pencil"></span>
                        </a>
                    </li>
                `
            ).join('');
        },
        getUISelectors: function () {
            return UISelectors;
        },
        getItemInput: function () {
            return {
                name: document.getElementById(UISelectors.nameInputID).value,
                calories: document.getElementById(UISelectors.caloriesInputID).value
            };
        }
    };
})();

// App Controller
const AppController = (function (ItemController, StorageController, UIController) {
    const addItem = function (event) {
        event.preventDefault();

        const input = UIController.getItemInput();

        if (input.name && input.calories) {
            const newItem = ItemController.addItem(input.name, input.calories);
        }
    };

    const loadEventListeners = function () {
        const UISelectors = UIController.getUISelectors();

        // add item event
        document.querySelector(UISelectors.addBtnClass).addEventListener(
            'click',
            addItem
        );
    };

    return {
        init: function () {
            const items = ItemController.getItems();
            UIController.showItems(items);
            loadEventListeners();
        }
    };
})(ItemController, StorageController, UIController);

AppController.init();
