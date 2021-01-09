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

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {//function model(){}
    addMovieModal.classList.toggle('visible'); //this method classList.toggle avoid error when it´s visible
    toggleBackdrop();
}; 

const cancelAddMovie = () => {
    toggleMovieModal();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

startMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);