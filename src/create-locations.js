function createLocations() {
    // CREATE PARENT
    const elContent = document.createElement('div');

    // CONTENT
    elContent.id = 'content';

    const elH1 = document.createElement('h1');
    elH1.textContent = 'Bugbait Locations';
    elContent.appendChild(elH1);


    const elH2 = document.createElement('h2');
    elH2.textContent = 'These are our locations that are available to be visited during working hours.';
    elContent.appendChild(elH2);



    const locations = ['Stores', 'Restaurants', 'Factories'];
    for (let y = 0; y < locations.length; y++) {
        const elDiv = document.createElement('div');
        elDiv.className = locations[y].toLowerCase();
        const elH3 = document.createElement('h3');
        elH3.textContent = locations[y];
        elDiv.appendChild(elH3);


        const elImgDiv = document.createElement('div');
        elImgDiv.className = 'image-grid';
        elDiv.appendChild(elImgDiv);

        const HOW_MANY_IMAGES_PER_LOCATION_NAME = 3;
        const locationNames = ['store', 'restaurant', 'factory'];
        for (let x = 0; x < HOW_MANY_IMAGES_PER_LOCATION_NAME; x++) {
            const elImg = document.createElement('img');
            elImg.src = `./img/${locationNames[y]}${x + 1}.jpg`;
            elImg.alt = `${locationNames[y]}${x + 1}`;
            elImg.addEventListener('pointerup', eventImageZoom)
            elImgDiv.appendChild(elImg);
        }
        elContent.appendChild(elDiv);
    }

    // RETURN
    return elContent;
}

function eventImageZoom(e) {
    const currentImage = e.target.alt;
    displayModal(currentImage);
}

function displayModal(imageName) {
    // CONTENT
    const elModal = document.createElement('div');
    elModal.id = 'modal';
    const elImage = document.createElement('img');
    elImage.id = 'modal-image'
    elImage.src = `./img/${imageName}.png`;
    elImage.alt = `${imageName}`;

    elModal.addEventListener('pointerup', () => {
        elModal.remove();
    });

    elModal.appendChild(elImage);
    document.body.appendChild(elModal);
}

export { createLocations };
