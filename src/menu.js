function drawMenu() {
    // DOM CACHE
    const elContainer = document.getElementById('container');

    // MAIN
    createHeader();

    elContainer.append(createHeader());
}

function createHeader() {
    // CREATE PARENT
    const elHeader = document.createElement('div');
    elHeader.id = 'header';

    // ICON
    const elIconLink = document.createElement('a');
    elIconLink.className = 'icon';
    const elIconImage = document.createElement('img');
    elIconImage.src = './svg/Orange_lambda.svg';
    elIconImage.alt = 'Lambda Icon';
    elIconLink.appendChild(elIconImage);

    elHeader.appendChild(elIconLink);

    // NAV
    const elUl = document.createElement('ul');
    const aNames = ['Home', 'Stores', 'Contact'];

    for (let i = 0; i < aNames.length; i++) {
        const elLi = document.createElement('li');
        const elA = document.createElement('a');
        elA.textContent = aNames[i];
        elA.id = aNames[i].toLowerCase();
        elLi.appendChild(elA);
        elUl.appendChild(elLi);
    }

    elHeader.appendChild(elUl);

    // RETURN
    return elHeader;
}

function createContent() {
    // CREATE PARENT
    const elWrapper = document.createElement('div');
    const elContent = document.createElement('content');
}

export { drawMenu };
