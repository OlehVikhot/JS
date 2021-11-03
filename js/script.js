"use strict";

const numberOfFIles = +prompt('How many movies you wathced?', '');

const personalMovieDB = {
    count: numberOfFIles,
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

// if (personalMovieDB.count < 10) {
//     console.log("Few movies");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('You are good viwer');
// } else if (personalMovieDB.count >= 30) {
//     console.log('You are film lover');
// } else {
//     console.log('Error');
// }

while (personalMovieDB.count < 10) {
    console.log("Few movies");
}

console.log(personalMovieDB);


