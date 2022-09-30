function createMenu() {
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
    elP.textContent = 'Half-Life Bugbait is a family of stores where Half-Life foods and weapons are available to purchase.';
    elContent.appendChild(elP);

    elP = document.createElement('p');
    elP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officiis, quaerat ab provident esse asperiores ut aliquam facilis! Doloremque fugit enim facere culpa ad nam, cumque repellat voluptatibus eius nostrum! Debitis commodi fuga dicta aut temporibus, quia accusamus molestiae eos possimus at rem. Quisquam assumenda odit ut expedita impedit vitae asperiores hic, iure deserunt quasi doloremque consequuntur tenetur consectetur! Perspiciatis. Inventore id, commodi magnam, laborum, in tempora dolores tenetur cupiditate vitae alias nobis impedit.';
    elContent.appendChild(elP);

    elP = document.createElement('p');
    elP.textContent = 'Fuga in voluptates eligendi enim quis facilis deleniti adipisci, architecto saepe omnis quisquam nobis sed harum? Ullam exercitationem sunt tempore reiciendis cumque iusto voluptatum odio saepe quae repellat, natus error eos velit vel officiis aliquid cum a quasi ut! Veritatis, aut. Minus excepturi odio nemo animi! Aliquid consequatur blanditiis totam sed aspernatur deserunt assumenda consequuntur quam, earum ducimus sint et.';
    elContent.appendChild(elP);



    elWrapper.appendChild(elContent);
    // RETURN
    return elWrapper;
}

export { createMenu };
