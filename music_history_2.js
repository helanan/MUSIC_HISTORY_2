// Assuming you have loaded the songs.js file with an array called 'songs'

// Add one song to the beginning and one to the end of the array
const newSongBeginning = "New Song by New Artist on the New Album";
const newSongEnd = "Another New Song by Another New Artist on Another New Album";
songs.unshift(newSongBeginning);
songs.push(newSongEnd);

// Iterate over the array, remove irrelevant words or characters, and replace '>'
const formattedSongs = songs.map(song => {
  // Assuming the song format is "{Song name} by {Artist} on the album {Album}"
  const [songName, artistAlbum] = song.split(" by ");
  const [artist, album] = artistAlbum.split(" on the album ");
  return `${songName} by ${artist} on the album ${album}`;
});

// Get the DOM element where you want to add the formatted songs
const mainContent = document.getElementById("main-content");

// Add each formatted song to the DOM
formattedSongs.forEach(formattedSong => {
  const songElement = document.createElement("p");
  songElement.textContent = formattedSong;
  mainContent.appendChild(songElement);
});
