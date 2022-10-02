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
    const aNames = ['Home', 'Locations', 'Contact'];

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

function createContentWrapper(appendElement = null) {
    const elWrapper = document.createElement('div');
    elWrapper.id = 'content-wrapper';

    if (appendElement !== null) {
        elWrapper.appendChild(appendElement);
    }

    return elWrapper;
}

function createFooter() {
    // CREATE PARENT
    const elFooter = document.createElement('div');
    elFooter.id = 'footer';

    // PARAGRAPH
    const elP = document.createElement('p');
    elP.textContent = '© 2022 Renekris. All bugs baited.';
    elFooter.appendChild(elP);

    // RETURN
    return elFooter;
}

export { createHeader, createFooter, createContentWrapper };
