function calculerNouveauDPI() {
    // Récupérer les valeurs des champs
    const currentDPI = document.getElementById('currentDPI').value;
    const currentSensitivity = document.getElementById('currentSensitivity').value;
    const newSensitivity = document.getElementById('newSensitivity').value;

    // Vérifier si les valeurs sont valides
    if (currentDPI > 0 && currentSensitivity > 0 && newSensitivity > 0) {
        // Calculer le Nouveau DPI
        const newDPI = (currentDPI * currentSensitivity) / newSensitivity;
        
        // Afficher le résultat
        document.getElementById('resultat').innerHTML = `Le Nouveau DPI est : ${newDPI.toFixed(2)}`;
    } else {
        document.getElementById('resultat').innerHTML = "Veuillez entrer des valeurs valides.";
    }
}
