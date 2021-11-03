const numberOfFIles = +prompt('How many movies you wathced?', '');

const personalMovieDB = {
    count: numberOfFIles,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film = prompt('Last of watched films?', ''),
      rating = prompt('Whats your rating?', ''),
      film2 = prompt('Last of watched films?', ''),
      rating2 = prompt('Whats your rating?', '');


personalMovieDB.movies[film] = rating;
personalMovieDB.movies[film2] = rating2;

console.log(personalMovieDB);