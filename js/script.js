"use strict";

let numberOfFiles;

function start() {
   numberOfFiles = +prompt('How many movies you wathced?', '');

   while (numberOfFiles == '' || numberOfFiles == null || isNaN(numberOfFiles)) {
        numberOfFiles = +prompt('How many movies you wathced?', '');
   }
}

start();

const personalMovieDB = {
    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Last of watched films?', ''),
//       b = prompt('Whats your rating?', ''),
//       c = prompt('Last of watched films?', ''),
//       d = prompt('Whats your rating?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



function remeberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Last of watched films?', ''),
              b = prompt('Whats your rating?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}
remeberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are good viwer');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are film lover');
    } else {
        console.log('Error');
    }
}
detectPersonalLevel();


function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function wtiteYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite genre number ${i}?`);
    }
}
wtiteYourGenres();



console.log(personalMovieDB);


