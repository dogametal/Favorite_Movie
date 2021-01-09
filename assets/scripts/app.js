const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];
//let addMovieModalMsg = addMovieModal.id;
//alert(addMovieModalMsg);
const startMovieButton = document.querySelector('header button');
//const startMovieButton = document.querySelector('header').lastElementChild;

const toggleMovieModal = () => {//function model(){}
    addMovieModal.classList.toggle('visible'); //this method classList.toggle avoid error when it´s visible
}; 

startMovieButton.addEventListener('click', toggleMovieModal);