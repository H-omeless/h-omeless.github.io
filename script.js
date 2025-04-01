const tracks = [
    "Luigi Raceway",
    "Moo Moo Farm",
    "Koopa Troopa Beach",
    "Kalamari Desert",
    "Toad's Turnpike",
    "Frappe Snowland",
    "Chcoco Mountain",
    "Mario Raceway",
    "Wario Stadium",
    "Sherbet Land",
    "Royal Raceway",
    "Bowser Castle",
    "DK's Jungle Parkway",
    "Yoshi Valley",
    "Banshee Boardwalk",
    "Rainbow Road",
];

document.getElementById('randomizeButton').addEventListener('click', () => {
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    document.getElementById('trackDisplay').textContent = randomTrack;
});
