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
        },
        getTotalCalories: function () {
            let totalCalories = 0;

            data.items.forEach(
                item => {
                    totalCalories += item.calories;
                }
            );

            data.totalCalories = totalCalories;

            return totalCalories;
        },
        getItemById: function (id) {
            let found = null;

            data.items.forEach(
                item => {
                    if (item.id === id) {
                        found = item;
                    }
                }
            );

            return found;
        },
        setCurrentItem: function (item) {
            data.currentItem = item;
        },
        getCurrentItem: function () {
            return data.currentItem;
        },
        updateItem: function (name, calories) {
            calories = parseInt(calories);

            data.currentItem.name = name;
            data.currentItem.calories = calories;

            return data.currentItem;
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
        updateBtnClass: '.update-btn',
        deleteBtnClass: '.delete-btn',
        backBtnClass: '.back-btn',
        nameInputID: 'itemName',
        caloriesInputID: 'itemCalories',
        totalCaloriesClass: '.total-calories'
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
        updateItem: function (item) {
            const li = document.getElementById(`item-${item.id}`);
            li.innerHTML = `
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <span class="edit-item fa fa-pencil"></span>
                </a>
            `;
        },
        hideList: function () {
            if (!hidden) {
                hidden = true;
                document.getElementById(UISelectors.itemListID).style.display = 'none';
            }
        },
        updateTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCaloriesClass).textContent = totalCalories;
        },
        clearEditState: function () {
            UIController.clearInput();

            document.querySelector(UISelectors.updateBtnClass).style.display = 'none';
            document.querySelector(UISelectors.deleteBtnClass).style.display = 'none';
            document.querySelector(UISelectors.backBtnClass).style.display = 'none';
            document.querySelector(UISelectors.addBtnClass).style.display = 'inline-block';
        },
        showEditState: function () {
            UIController.clearInput();

            document.querySelector(UISelectors.updateBtnClass).style.display = 'inline-block';
            document.querySelector(UISelectors.deleteBtnClass).style.display = 'inline-block';
            document.querySelector(UISelectors.backBtnClass).style.display = 'inline-block';
            document.querySelector(UISelectors.addBtnClass).style.display = 'none';
        },
        addItemToForm: function () {
            UIController.showEditState();

            const currentItem = ItemController.getCurrentItem();

            document.getElementById(UISelectors.nameInputID).value = currentItem.name;
            document.getElementById(UISelectors.caloriesInputID).value = currentItem.calories;
        }
    };
})();

// App Controller
const AppController = (function (ItemController, StorageController, UIController) {
    const addItem = function (event) {
        event.preventDefault();

        const currentItem = ItemController.getCurrentItem();

        if (!currentItem) {
            const input = UIController.getItemInput();
    
            if (input.name && input.calories) {
                const newItem = ItemController.addItem(input.name, input.calories);
                UIController.addItem(newItem);
    
                const totalCalories = ItemController.getTotalCalories();
                UIController.updateTotalCalories(totalCalories);
    
                UIController.clearInput();
            }
        }

    };

    const itemEditClick = function (event) {
        if (event.target.classList.contains('edit-item')) {
            event.preventDefault();

            const itemID = parseInt(event.target.parentNode.parentNode.id.split('-')[1]);

            const item = ItemController.getItemById(itemID);

            ItemController.setCurrentItem(item);

            UIController.addItemToForm();
        }
    };

    const editItem = function (event) {
        event.preventDefault();

        const currentItem = ItemController.getCurrentItem();

        if (currentItem) {
            const input = UIController.getItemInput();

            if (input.name && input.calories) {
                const updatedItem = ItemController.updateItem(input.name, input.calories);
        
                ItemController.setCurrentItem(null);
        
                UIController.updateItem(updatedItem);
        
                const totalCalories = ItemController.getTotalCalories();
                UIController.updateTotalCalories(totalCalories);
        
                UIController.clearEditState();
            }
        }
    };

    const loadEventListeners = function () {
        const UISelectors = UIController.getUISelectors();

        // add item event
        document.querySelector(UISelectors.addBtnClass).addEventListener(
            'click',
            addItem
        );

        document.addEventListener(
            'keypress',
            function (event) {
                if (event.keyCode === 13 || event.which === 13 || event.key === 13) {
                    event.preventDefault();
                    return false;
                }
            }
        );

        // edit icon click event
        document.getElementById(UISelectors.itemListID).addEventListener(
            'click',
            itemEditClick
        );

        // update item event
        document.querySelector(UISelectors.updateBtnClass).addEventListener(
            'click',
            editItem
        );
    };

    return {
        init: function () {
            UIController.clearEditState();

            const items = ItemController.getItems();

            if (items.length) {
                UIController.showItems(items);
                const totalCalories = ItemController.getTotalCalories();
                UIController.updateTotalCalories(totalCalories);
            } else {
                UIController.hideList();
            }

            loadEventListeners();
        }
    };
})(ItemController, StorageController, UIController);

AppController.init();
