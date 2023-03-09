// Create a for loop that will list all of the albums in albums.js
// If there are less than 10 albums, an <h4> message should be populated in the header that says "You need more albums!"
// Otherwise, an <h4> message should be populated in the header that says "Let's start playing music!"

// You already have the variable "html" that can be used to create the album listings for the DOM, 
// as well as the code to produce whatever content the variable "html" has

//The message variables have also been included

//let html = '';
let moreAlbumsMessage = "You need more albums!";
let playMusicMessage = "Let's start playing music!";

// insert your code here

let html = '';

for (let i = 0; i < albums.length; i++){ // for loop always startst with for (){}, i = 0 means counter start at 0. 
    // i has to be less than the length because if it is the actual length, there is nothing at the last counter.
    // i++ is not just adding once, but twice. This makes the loop keep going as the index increases to its end.
  html += ` // using backticks because we are using template literals. This differentiates from actual text.
  // if we do not do +=, the browser will play the loop rapidly, erasing each array's info until it reaches the last index and stays there, instead of listing i numbers of arrays.
      <h2>${albums[i].name}</h2> // dollar sign curly brackets drops in information that is going to change
      <h3>${albums[i].artist}</h3> // this will display the artist name in the array based on its index (location)
      <p>${albums[i].genre}</p>
      <img src="${albums[i].artwork}" alt="${albums[i].name}">
  `;
    console.log (`This loop has run ${i} times`) // this console log will help to make sure your code is running the way it should be
}
if  (albums.length < 9){
    document.createElement(`<h4>${moreAlbumsMessage}</h4>`);
}

else{
    document.createElement(`<h4>${playMusicMessage}</h4>`);
}


document.querySelector('main').insertAdjacentHTML('beforeend', html);