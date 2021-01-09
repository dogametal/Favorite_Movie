const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];
//let addMovieModalMsg = addMovieModal.id;
//alert(addMovieModalMsg);
const startMovieButton = document.querySelector('header button');
//const startMovieButton = document.querySelector('header').lastElementChild;

const backdrop = document.getElementById('backdrop');
//const backdrop = document.body.firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input');
//const userInputs = addMovieModal.getElementsByTagName('input');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {//function model(){}
    addMovieModal.classList.toggle('visible'); //this method classList.toggle avoid error when it´s visible
    toggleBackdrop();
}; 

const cancelAddMovieHandler = () => {
    toggleMovieModal();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim === '' || imageUrlValue.trim === '' || ratingValue.trim === '' ||
        + ratingValue < 1 || ratingValue > 5) {
        alert('Please Enter valid values (rating between 1 to 5');
        return;
    }

};

const backdropClickHandler = () => {
    toggleMovieModal();
};


startMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);