import { createHeader, createFooter } from "./create-base";
import { createMenu } from './create-menu.js';
import './index.css';


(function main() {
    // DOM CACHE
    const elContainer = document.getElementById('container');

    // DRAW HOME ELEMENTS
    elContainer.append(createHeader());
    elContainer.append(createMenu());
    elContainer.append(createFooter());

    // DOM CACHE
    const elHome = document.getElementById('home');
    const elStores = document.getElementById('home');
    const elContact = document.getElementById('home');

    // EVENT LISTENERS
    elHome.addEventListener('pointerdown', eventHome);
    elStores.addEventListener('pointerdown', eventStores);
    elContact.addEventListener('pointerdown', eventContact);
})();

function eventHome() {
    elContainer.append(createHeader());
    elContainer.append(createMenu());
    elContainer.append(createFooter());
}

function eventStores() {
    elContainer.append(createHeader());
    elContainer.append(createStores());
    elContainer.append(createFooter());
}

function eventContact() {
    elContainer.append(createHeader());
    elContainer.append(createContact());
    elContainer.append(createFooter());
}
