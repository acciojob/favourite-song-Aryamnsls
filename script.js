// Define the song details
const songName = "Bohemian Rhapsody";
const youtubeLink = "https://www.youtube.com/watch?v=fJ9rUzIMcZQ";

// Select the container div
const songContainer = document.getElementById("song-container");

// Create the anchor tag dynamically
const songElement = document.createElement("p");
songElement.innerHTML = `My current favourite song is <a href="${youtubeLink}" target="_blank">${songName}</a>`;

// Append to the container
songContainer.appendChild(songElement);
