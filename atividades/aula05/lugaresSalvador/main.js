const places = [
    { name: "Baía de Todos os Santos", description: "Vista aérea da Baía de Todos os Santos" },
    { name: "Bambuzal do Aeroporto", description: "Bambuzal do Aeroporto 2 de Julho" },
    { name: "Igreja do Bonfim", description: "Vista da Igreja do Bonfim" }
];

const votes = [0, 0, 0];

function vote(placeNumber) {
    //const confirmation = confirm(`Tem certeza de que deseja votar em ${places[placeNumber - 1].name}?`);
    //if (confirmation) {
        votes[placeNumber - 1]++;
        updateVotes();
        updateLeaderboard();
    //}
}

function updateVotes() {
    for (let i = 1; i <= 3; i++) {
        const voteElement = document.getElementById(`votes${i}`);
        if (voteElement) {
            voteElement.textContent = votes[i - 1];
        }
    }
}

function updateLeaderboard() {
    const leaderboard = document.getElementById("leaderboard");
    const maxVotes = Math.max(...votes);
    const topPlaces = [];

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === maxVotes) {
            topPlaces.push(places[i]);
        }
    }

    let leaderboardText = "<h2>Classificação</h2>";

    if (topPlaces.length === 1) {
        leaderboardText += `<p>Lugar mais votado: ${topPlaces[0].name}</p>`;
        leaderboardText += `<p>${topPlaces[0].description}</p>`;
    } else {
        leaderboardText += "<p>Lugares mais votados:</p>";

        topPlaces.forEach(place => {
            leaderboardText += `<p>${place.name}: ${place.description}</p>`;
        }
        );
    }

    leaderboard.innerHTML = leaderboardText;
}

