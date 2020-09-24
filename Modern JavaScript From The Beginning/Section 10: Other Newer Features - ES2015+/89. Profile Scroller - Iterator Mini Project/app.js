const data = [
    {
        age: 25,
        gender: 'female',
        image: 'https://randomuser.me/api/portraits/women/66.jpg',
        location: 'Paris',
        lookingFor: 'male',
        name: 'Vicky'
    },
    {
        age: 27,
        gender: 'male',
        image: 'https://randomuser.me/api/portraits/men/82.jpg',
        location: 'New York',
        lookingFor: 'female',
        name: 'Jack'
    },
    {
        age: 21,
        gender: 'female',
        image: 'https://randomuser.me/api/portraits/women/34.jpg',
        location: 'London',
        lookingFor: 'male',
        name: 'Annie'
    },
    {
        age: 24,
        gender: 'male',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        location: 'Berlin',
        lookingFor: 'female',
        name: 'Jonas'
    }
];

function profilesIterator (profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length
                ? {
                    done: false,
                    value: profiles[nextIndex++]
                }
                : {
                    done: true
                };
        }
    };
}

const iterator = profilesIterator(data);

function nextProfile () {
    const profile = iterator.next().value;

    if (profile) {
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group text-center">
                <li class="list-group-item">${profile.name}</li>
                <li class="list-group-item">${profile.age}</li>
                <li class="list-group-item">${profile.location}</li>
                <li class="list-group-item">${profile.gender} looking for ${profile.lookingFor}</li>
            </ul>
        `;
    
        document.getElementById('imageDisplay').innerHTML = `
            <img src="${profile.image}" alt="${profile.name}" class="d-block mx-auto">
        `;
    } else {
        window.location.reload();
    }
}

nextProfile();

document.getElementById('next').addEventListener(
    'click',
    nextProfile
);
