function createContact() {
    // CREATE PARENT
    const elContent = document.createElement('div');

    // CONTENT
    elContent.id = 'content';

    const elH1 = document.createElement('h1');
    elH1.textContent = 'Contact Bugbait';
    elContent.appendChild(elH1);


    let elP = document.createElement('p');
    elP.textContent = '';
    elContent.appendChild(elP);

    elP = document.createElement('p');
    elP.textContent = 'test';
    elContent.appendChild(elP);

    elP = document.createElement('p');
    elP.textContent = 'test 2';
    elContent.appendChild(elP);


    // RETURN
    return elContent;
}

export { createContact };
