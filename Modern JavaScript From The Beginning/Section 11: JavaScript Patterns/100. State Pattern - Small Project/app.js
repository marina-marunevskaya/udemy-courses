const PageState = function () {
    let currentState = new HomeState();

    this.init = function () {
        this.change(new HomeState());
    };

    this.change = function (state) {
        currentState = state;
    }
};

const HomeState = function () {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    `;
};

const AboutState = function () {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
        <p>This is the about page.</p>
    `;
};

const ContactState = function () {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
        <form>
            <div class="form-group">
                <label for="nameInput">Name</label>
                <input type="text" id="nameInput" class="form-control">
            </div>
            <div class="form-group">
                <label for="emailInput">Email</label>
                <input type="email" id="emailInput" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `;
};

const pageState = new PageState();
pageState.init();

const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

home.addEventListener(
    'click',
    event => {
        event.preventDefault();
        pageState.change(new HomeState());
    }
);

about.addEventListener(
    'click',
    event => {
        event.preventDefault();
        pageState.change(new AboutState());
    }
);

contact.addEventListener(
    'click',
    event => {
        event.preventDefault();
        pageState.change(new ContactState());
    }
);
