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
        itemListID: 'item-list'
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
        }
    };
})();

// App Controller
const AppController = (function (ItemController, StorageController, UIController) {
    return {
        init: function () {
            const items = ItemController.getItems();
            UIController.showItems(items);
        }
    };
})(ItemController, StorageController, UIController);

AppController.init();
