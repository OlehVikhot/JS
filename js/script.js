"use strict";

let numberOfFiles;




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies you wathced?', '');
     
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies you wathced?', '');
        }
     },
     remeberMyFilms: function(){
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Few movies");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are good viwer');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are film lover');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимий жанр под номером ${i}?`);

            if(genre === '' || genre == null){
                console.log('Некоректные данние');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимий жанр ${i + 1} = это ${item}`);
        });
    }
};

// const a = prompt('Last of watched films?', ''),
//       b = prompt('Whats your rating?', ''),
//       c = prompt('Last of watched films?', ''),
//       d = prompt('Whats your rating?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// console.log(personalMovieDB);


