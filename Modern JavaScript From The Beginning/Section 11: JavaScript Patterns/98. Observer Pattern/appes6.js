class EventObserver {
    constructor () {
        this.observers = [];
    }
    
    subscribe (observerToAdd) {
        this.observers.push(observerToAdd);
        console.log(`A new observer "${observerToAdd.name}" was added.`);
    }

    unsubscribe (observerToRemove) {
        this.observers = this.observers.filter(
            observer => observer !== observerToRemove
        );
        console.log(`An observer "${observerToRemove.name}" was removed.`);
    }

    fire () {
        this.observers.forEach(
            observer => {
                observer.call();
            }
        );
    }
}

const getCurrentMilliseconds = function () {
    console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}; 

const getCurrentSeconds = function () {
    console.log(`Current seconds: ${new Date().getSeconds()}`);
}; 

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener(
    'click',
    function () {
        click.subscribe(getCurrentMilliseconds);
    }
);

document.querySelector('.unsub-ms').addEventListener(
    'click',
    function () {
        click.unsubscribe(getCurrentMilliseconds);
    }
);

document.querySelector('.sub-s').addEventListener(
    'click',
    function () {
        click.subscribe(getCurrentSeconds);
    }
);

document.querySelector('.unsub-s').addEventListener(
    'click',
    function () {
        click.unsubscribe(getCurrentSeconds);
    }
);

document.querySelector('.fire').addEventListener(
    'click',
    function () {
        click.fire();
    }
);
