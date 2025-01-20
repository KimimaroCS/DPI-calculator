function calculerDPI() {
    // Récupérer les valeurs des champs
    const distance = document.getElementById('distance').value;
    const pixels = document.getElementById('pixels').value;

    // Vérifier si les valeurs sont valides
    if (distance > 0 && pixels > 0) {
        // Calculer le DPI
        const dpi = (pixels / distance) * 2.54; // Convertir la distance en pouces (1 pouce = 2.54 cm)
        
        // Afficher le résultat
        document.getElementById('resultat').innerHTML = `Le DPI de votre souris est : ${dpi.toFixed(2)}`;
    } else {
        document.getElementById('resultat').innerHTML = "Veuillez entrer des valeurs valides.";
    }
}