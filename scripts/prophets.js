const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData () {
    const response = await fetch(url);
    const data = await response.json();

    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');

        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let death = document.createElement('p');
        let service = document.createElement('p');
        let order = document.createElement('p');
        let numberofChildren = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        death.textContent = `Date of Death: ${prophet.death}`;
        service.textContent = `Length of Service: ${prophet.length}`;
        order.textContent = `Heirarchical Order: ${prophet.order}`;
        numberofChildren.textContent = `Number of Children: ${prophet.numofchildren}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(death);
        card.appendChild(service);
        card.appendChild(order);
        card.appendChild(numberofChildren);

        cards.appendChild(card);
    });
}
