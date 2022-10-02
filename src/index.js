import { createHeader, createFooter, createContentWrapper } from './create-base';
import { createHome } from './create-home.js';
import { createStores } from './create-stores';
import { createContact } from './create-contact';
import './index.css';


(function main() {
    // DOM CACHE
    const elContainer = document.getElementById('container');

    // DRAW HOME ELEMENTS
    elContainer.append(createHeader());
    elContainer.append(createContentWrapper(createHome()));
    elContainer.append(createFooter());

    // DOM CACHE
    const elHome = document.getElementById('home');
    const elStores = document.getElementById('stores');
    const elContact = document.getElementById('contact');

    // NAV EVENT LISTENERS
    elHome.addEventListener('pointerdown', eventHome);
    elStores.addEventListener('pointerdown', eventStores);
    elContact.addEventListener('pointerdown', eventContact);
})();

function eventHome() {
    replaceContent(createHome());
}

function eventStores() {
    replaceContent(createStores());
}

function eventContact() {
    replaceContent(createContact());
}

function replaceContent(element = null) {
    if (!(element instanceof HTMLDivElement) || element === null) return;
    const contentWrapper = document.getElementById('content-wrapper');
    contentWrapper.innerHTML = '';
    contentWrapper.append(element);
}
