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
        items: [],
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

    let hidden = false;

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
        },
        addItem: function (item) {
            if (hidden) {
                hidden = false;
                document.getElementById(UISelectors.itemListID).style.display = 'block';
            }

            const li = document.createElement('li');
            li.classList.add('collection-item');
            li.id = `item-${item.id}`;
            li.innerHTML = `
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <span class="edit-item fa fa-pencil"></span>
                </a>
            `;
            document.getElementById(UISelectors.itemListID).insertAdjacentElement('beforeend', li);
        },
        clearInput: function () {
            document.getElementById(UISelectors.nameInputID).value = '';
            document.getElementById(UISelectors.caloriesInputID).value = '';
        },
        hideList: function () {
            if (!hidden) {
                hidden = true;
                document.getElementById(UISelectors.itemListID).style.display = 'none';
            }
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
            UIController.addItem(newItem);
            UIController.clearInput();
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

            if (items.length) {
                UIController.showItems(items);
            } else {
                UIController.hideList();
            }

            loadEventListeners();
        }
    };
})(ItemController, StorageController, UIController);

AppController.init();
