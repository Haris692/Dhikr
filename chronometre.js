let interval;
let tiersDuTemps;
let alerteAffichee = false;

// Hadiths pour chaque tier
const hadiths = [
    "D'après Bilal Ibn Yasar Ibn Zayd, d'après son père, d'après son grand-père (qu'Allah l'agrée), le Prophète (que la prière d'Allah et Son salut soient sur lui) a dit : « Celui qui dit: -Je demande pardon à Allah en dehors de qui il n'y a pas d'autre divinité méritant d'être adorée, le Vivant, Celui qui se suffit à lui même et je me repens à lui- (*) il lui est pardonné même s'il avait fui lors du combat ». (Rapporté par Tirmidhi dans ses Sounan n°3576 et authentifié par Cheikh Albani dans sa correction de Sounan Tirmidh",
    "D'après Abou Houreira (qu'Allah l'agrée) : Nous avons dit : Ô Messager d'Allah ! Comment devons nous prier sur toi ? Le Prophète (que la prière d'Allah et Son salut soient sur lui) a dit: « Dites : Ô Allah ! Prie sur Mouhammad et sur la famille de Mouhammad et béni Mouhammad et la famille de Mouhammad comme tu as prié sur Ibrahim et sur sa famille et les as béni. Tu es certes digne de louange et de gloire (*) ». (Rapporté par Tahawi dans Charh Moushkil Al Athar n°2240 et authentifié par Cheikh Albani dans Asl Sifat Salat vol 3 p 926) (*) En phonétique : Allahoumma Salli 'Ala Mohammed Wa 'Ala Ali Mohammed Wa Barik 'Ala Mohammed Wa 'Ala Ali Mohammed Kama Sallayta Wa Barakta 'Ala Ibrahim Wa Ali Ibrahim Innaka Hamidoun Majid",
    // Ajoute d'autres hadiths pour chaque tier si nécessaire
];

function ajusterDuree(ajustement) {
    dureeEnMinutes += ajustement;
    if (dureeEnMinutes < 1) {
        dureeEnMinutes = 1;
    }
    document.getElementById('duree').innerText = dureeEnMinutes;
    tiersDuTemps = Math.floor(dureeEnMinutes / 3);
}

function chargerHadith(tier) {
    document.getElementById('hadith').innerHTML = `<strong>Hadith (${tier + 1} sur 3) :</strong> ${hadiths[tier]}`;
}

function afficherChronometre(minutes, secondes) {
    document.getElementById('chronometre').innerHTML = `${minutes}:${secondes}`;
}

function demarrerChronometre() {
    let tempsRestant = dureeEnMinutes * 60;
    tiersDuTemps = Math.floor(dureeEnMinutes / 3);
    alerteAffichee = false;

    // Affichage du premier hadith
    chargerHadith(0);

    interval = setInterval(function () {
        if (tempsRestant === 0) {
            clearInterval(interval);
            alert("La séance de Dikhr est terminée !");
        }

        const minutes = Math.floor(tempsRestant / 60);
        const secondes = tempsRestant % 60;

        afficherChronometre(minutes, secondes);

        // Charger un nouveau hadith à chaque changement de tier
        if (tempsRestant % (tiersDuTemps * 60) === 0) {
            const tierActuel = Math.floor((dureeEnMinutes * 60 - tempsRestant) / (tiersDuTemps * 60));
            chargerHadith(tierActuel);
        }

        tempsRestant--;
    }, 1000);
}
