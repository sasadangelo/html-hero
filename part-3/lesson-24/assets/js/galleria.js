/*
    © 2025 Salvatore D'Angelo
    Questo progetto è distribuito sotto licenza MIT.
    Vedi https://opensource.org/licenses/MIT per i dettagli.
*/

/*
 * galleria.js – Funzioni JavaScript per la gestione della galleria fotografica.
 *
 * Questo file è incluso nelle pagine galleria.html e sport.html tramite il tag:
 *   <script src="assets/js/galleria.js" defer></script>
 *
 * Separare il JavaScript in un file esterno è una buona pratica perché:
 * 1. Mantiene il codice HTML più pulito e leggibile
 * 2. Il file JS può essere riutilizzato in più pagine HTML
 * 3. Il browser può memorizzare nella cache il file, migliorando le performance
 */

/**
 * mostraImmagine - Apre il visualizzatore a schermo intero con l'immagine cliccata.
 *
 * @param {HTMLImageElement} img - L'elemento <img> su cui l'utente ha cliccato.
 *
 * Come funziona:
 * 1. Recupera il visualizzatore dal DOM tramite getElementById
 * 2. Imposta src e alt dell'immagine espansa copiandoli dall'immagine cliccata
 * 3. Rende visibile il visualizzatore impostando style.display = "block"
 */
function mostraImmagine(img) {
    var viewer = document.getElementById("gallery-viewer");
    var expandedImg = document.getElementById("gallery-expanded-img");
    expandedImg.src = img.src;
    expandedImg.alt = img.alt;
    viewer.style.display = "block";
}

/**
 * chiudiImmagine - Nasconde il visualizzatore a schermo intero.
 *
 * Come funziona:
 * 1. Recupera il visualizzatore dal DOM tramite getElementById
 * 2. Lo nasconde impostando style.display = "none"
 */
function chiudiImmagine() {
    document.getElementById("gallery-viewer").style.display = "none";
}
