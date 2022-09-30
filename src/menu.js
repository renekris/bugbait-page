function drawMenu() {
    // DOM CACHE
    const elContainer = document.getElementById('container');

    // MAIN
    elContainer.append(createHeader());
    elContainer.append(createContent());
    elContainer.append(createFooter());
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
    const elContent = document.createElement('div');

    // CONTENT
    elWrapper.className = 'content-wrapper';
    elContent.id = 'content';

    const elH1 = document.createElement('h1');
    elH1.textContent = 'Half-Life Bugbait';
    elContent.appendChild(elH1);


    let elP = document.createElement('p');
    elP.textContent = 'Half-Life Bugbait is a store where Half-Life items are available to purchase.';
    elContent.appendChild(elP);

    elP = document.createElement('p');
    elP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officiis, quaerat ab provident esse asperiores ut aliquam facilis! Doloremque fugit enim facere culpa ad nam, cumque repellat voluptatibus eius nostrum! Debitis commodi fuga dicta aut temporibus, quia accusamus molestiae eos possimus at rem. Quisquam assumenda odit ut expedita impedit vitae asperiores hic, iure deserunt quasi doloremque consequuntur tenetur consectetur! Perspiciatis. Inventore id, commodi magnam, laborum, in tempora dolores tenetur cupiditate vitae alias nobis impedit.';
    elContent.appendChild(elP);

    elP = document.createElement('p');
    elP.textContent = 'Fuga in voluptates eligendi enim quis facilis deleniti adipisci, architecto saepe omnis quisquam nobis sed harum? Ullam exercitationem sunt tempore reiciendis cumque iusto voluptatum odio saepe quae repellat, natus error eos velit vel officiis aliquid cum a quasi ut! Veritatis, aut. Minus excepturi odio nemo animi! Aliquid consequatur blanditiis totam sed aspernatur deserunt assumenda consequuntur quam, earum ducimus sint et.';
    elContent.appendChild(elP);



    elWrapper.appendChild(elContent);
    // RETURN
    console.log(elWrapper);
    return elWrapper;
}

function createFooter() {
    const elFooter = document.createElement('div');
    elFooter.id = 'footer';

    const elP = document.createElement('p');
    elP.textContent = '© 2022 Renekris. All bugs baited.';
    elFooter.appendChild(elP);

    return elFooter;
}

export { drawMenu };
