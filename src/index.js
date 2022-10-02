import { createHeader, createFooter, createContentWrapper } from './create-base';
import { createHome } from './create-home.js';
import { createLocations } from './create-locations';
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
    const elStores = document.getElementById('locations');
    const elContact = document.getElementById('contact');

    // NAV EVENT LISTENERS
    elHome.addEventListener('pointerup', eventHome);
    elStores.addEventListener('pointerup', eventStores);
    elContact.addEventListener('pointerup', eventContact);
})();

function eventHome() {
    replaceContent(createHome());
}

function eventStores() {
    replaceContent(createLocations());
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
