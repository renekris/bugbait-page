function createContact() {
    // CREATE PARENT
    const elContent = document.createElement('div');

    // CONTENT
    elContent.id = 'content';

    const elH1 = document.createElement('h1');
    elH1.textContent = 'Contact Bugbait';
    elContent.appendChild(elH1);


    const elH2 = document.createElement('h2');
    elH2.textContent = 'Our workers. contact is available directly.';
    elContent.appendChild(elH2);

    const elUserContacts = document.createElement('div');
    elUserContacts.id = 'user-contacts';
    elContent.appendChild(elUserContacts);

    const users = [];
    users.push(new User('Renekris', 'CEO', 'renekris@bugbait.com', './img/user/ceo1.png', 'CEO of the company'));
    users.push(new User('Alex', 'Scientist', 'alex@bugbait.com', './img/user/scientist1.png', 'PhD. Alex'));
    users.push(new User('Marcus', 'Scientist', 'marcus@bugbait.com', './img/user/scientist2.png', 'PhD. Marcus'));
    users.push(new User('Gio', 'Scientist', 'gio@bugbait.com', './img/user/scientist3.png', 'PhD. Gio'));
    users.push(new User('Kert', 'Scientist', 'kert@bugbait.com', './img/user/scientist4.png', 'PhD. Kert'));


    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const elUserDiv = document.createElement('div');
        elUserDiv.className = 'user';

        const elUserImg = document.createElement('img');
        elUserImg.src = user.img;
        elUserImg.alt = user.alt;

        const elContact = document.createElement('div');
        elContact.className = 'contact';
        let elP = document.createElement('p');
        elP.textContent = user.name;
        elContact.appendChild(elP);
        elP = document.createElement('p');
        elP.textContent = user.title;
        elContact.appendChild(elP);
        elP = document.createElement('p');
        elP.textContent = user.email;
        elContact.appendChild(elP);

        elUserDiv.append(elUserImg, elContact);
        elUserContacts.appendChild(elUserDiv);
    }

    // RETURN
    return elContent;
}

class User {
    constructor(name, title, email, img, alt) {
        this.uuid = crypto.randomUUID();
        this.name = name;
        this.title = title;
        this.email = email;
        this.img = img;
        this.alt = alt;
    }
}

export { createContact };
