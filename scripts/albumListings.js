// Create a for loop that will list all of the albums in albums.js
// If there are less than 10 albums, an <h4> message should be populated in the header that says "You need more albums!"
// Otherwise, an <h4> message should be populated in the header that says "Let's start playing music!"

// You already have the variable "html" that can be used to create the album listings for the DOM, 
// as well as the code to produce whatever content the variable "html" has

//The message variables have also been included

//let html = '';
//let moreAlbumsMessage = "You need more albums!";
//let playMusicMessage = "Let's start playing music!";

// insert your code here

let html = '';

for (let i = 0; i < albums.length; i++){
  html += `
      <h2>${albums[i].name}</h2>
      <h3>${albums[i].artist}</h3>
      <p>${albums[i].genre}</p>
      <img src="${albums[i].artwork}" alt="${albums[i].name}">
  `;

} 

if (i = 0, albmums.length < 9){
    Header.innerhtml="You need more albums!";

}
else if(i = 0, albums.length >= 9){
    Header.innerhtml="Let's start playing music!";
}


document.querySelector('main').insertAdjacentHTML('beforeend', html);
