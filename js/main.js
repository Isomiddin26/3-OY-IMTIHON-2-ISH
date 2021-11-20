var song = [
    "Jazz","Blues"
]

song.push("Rock-n-roll");
song.splice(1, 1, "Classic");
song.shift();
song.unshift("Rap", "Reggae");

console.log(song)