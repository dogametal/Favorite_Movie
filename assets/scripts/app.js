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

const entryTextSection = document.getElementById('entry-text');

const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const clearMovieInput = () => {
	for (const usrInput of userInputs){
		usrInput.value = '';
	}
};

const updateUI = () => {
	if(movies.lengh ===0){
		entryTextSection.style.display = 'block';
	}
	else{
		entryTextSection.style.display = 'none';
	}
	
};

const closeMovieDeletionModal = () => {
	toggleBackdrop();
	deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = movieId => {
	let movieIndex = 0;
	for (const movie of movies){
		if (movie.id === movieId){
			break;
		}
		movieIndex++;
	}
	movies.splice(movieIndex, 1);
	
	const listRoot = document.getElementById('movie-list');
	listRoot.children[movieIndex].remove();
	
	//listRoot.removeChild(listRoot.children[movieIndex]);
	closeMovieDeletionModal();
	updateUI();
};

const startDeleteMovieHandler = (movieId) => {
	deleteMovieModal.classList.add('visible');
	toggleBackdrop();
	const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
	
	//WA 
	let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');	
	confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
	confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
	
	
	//* not work* confirmDeletionButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId));
	cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
	//deleteMovie(movieId);
	
	cancelDeletionButton.addEventListener('click',() =>{
		closeMovieDeletionModal();
	});
	
	confirmDeletionButton.addEventListener(
			    'click',
			    deleteMovieHandler.bind(null, movieId)
			  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
	const newMovieElement = document.createElement('li');
	newMovieElement.className = 'movie-element';
	newMovieElement.innerHTML = ` 
	<div class="movie-element_image">
		<img src="${imageUrl}" alt="${title}">
	</div>
	<div class="movie-element_info">
		<h2>${title}</h2>
		<p>${rating}/5 stars</p>
	</div">
	`;
	newMovieElement.addEventListener('click',startDeleteMovieHandler.bind(null, id));
	const listRoot = document.getElementById('movie-list');
	listRoot.append(newMovieElement);
};



const closeMovieModal = () => {
	addMovieModal.classList.remove('visible');
};
/*
const toggleMovieModal = () => {//function model(){}
    addMovieModal.classList.toggle('visible'); //this method classList.toggle avoid error when it�s visible
    toggleBackdrop();
};
*/
const showMovieModal = () => {
    addMovieModal.classList.add('visible'); 
    toggleBackdrop();
};


const cancelAddMovieHandler = () => {
	closeMovieModal();
	toggleBackdrop();
    clearMovieInput();
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

    const newMovies = {
    		id : Math.random().toString(),
    		title : titleValue,
    		image : imageUrlValue,
    		rating : ratingValue

    };
    
    movies.push(newMovies);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(newMovies.id, newMovies.title, newMovies.image, newMovies.rating);
    updateUI();
};

const backdropClickHandler = () => {
	closeMovieModal();
	closeMovieDeletionModal();
	clearMovieInput();
};


startMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);