function redirigerVers(option) {
    if (option === 'seanceDikhr') {
        window.location.href = 'seanceDikhr.html';
    } else if (option === 'tahsinSunnah') {
        window.location.href = 'tahsinSunnah.html';
    }
}

function demarrerChronometre() {
    let tempsRestant = dureeEnMinutes * 60;

    interval = setInterval(function () {
        const minutes = Math.floor(tempsRestant / 60);
        const secondes = tempsRestant % 60;

        document.getElementById('chronometre').innerHTML = `${minutes}:${secondes}`;

        if (tempsRestant === 0) {
            clearInterval(interval);
            alert("La séance de Dikhr est terminée !");
        }

        tempsRestant--;
    }, 1000);
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker enregistré avec succès:', registration);
        })
        .catch(error => {
            console.log('Erreur lors de l enregistrement du Service Worker:', error);
        });
}