# 📘 Lezione 24 – Creiamo la Galleria e aggiorniamo la Home Page

In questa lezione facciamo due cose: aggiungiamo la **galleria fotografica interattiva** con CSS Grid e JavaScript esterno, e **aggiorniamo la Home Page** per collegare tutte le sezioni reali del sito al posto dei placeholder.

## 🎓 Cosa Imparerai?

Durante questa lezione scoprirai come:

- Usare **CSS Grid** per organizzare le immagini in una griglia responsive
- La proprietà `grid-template-columns: repeat(auto-fill, minmax(...))` per colonne automatiche
- Come gestire le immagini con `object-fit: cover` per uniformare le dimensioni
- Come creare un **visualizzatore lightbox** con `position: fixed` e `z-index`
- Separare il **JavaScript in un file esterno** (`assets/js/galleria.js`) con `defer`
- **Aggiornare una pagina esistente** (la Home) quando il sito cresce
- Usare le entità HTML (`&amp;`, `&rarr;`) per caratteri speciali nel testo

## 🖼️ CSS Grid e il Lightbox

```css
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
}
```

Il pattern lightbox usa un `div` nascosto (`display: none`) che copre tutta la viewport, reso visibile da JavaScript al click su una foto.

## 🖼️ Aggiornamento della Home Page

La Home Page passa da:

| Prima | Dopo |
|---|---|
| "Seconda Pagina" → `seconda_pagina.html` | "La Mia Galleria" → `galleria.html` |
| "Terza Pagina" → `terza_pagina.html` | "Risorse" → `risorse.html` |
| "Quarta Pagina" → `quarta_pagina.html` | "Chi Sono" → `chi_sono.html` |
| Testi Lorem Ipsum | Descrizioni reali del sito |

## 📂 File modificati in questa lezione

| File | Operazione | Descrizione |
|---|---|---|
| `galleria.html` | ✨ Nuovo | Galleria fotografica con lightbox |
| `assets/gallery/` | ✨ Nuovo | 10 immagini della galleria |
| `assets/js/galleria.js` | ✨ Nuovo | Funzioni JS per mostrare/chiudere le foto |
| `assets/css/page.css` | ✏️ Modificato | Stili per griglia e lightbox |
| `index.html` | ✏️ Modificato | Homepage aggiornata con link reali e testi descrittivi |
| Tutti gli `.html` | ✏️ Modificato | Menu aggiornato con link a Galleria |

## 🎯 Obiettivo

Alla fine di questa lezione avrai:
- Una galleria fotografica responsive con CSS Grid e lightbox JavaScript
- Una Home Page che punta alle pagine reali del sito con descrizioni significative
- Il codice JavaScript separato in un file esterno riutilizzabile
