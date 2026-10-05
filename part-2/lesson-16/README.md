# 📘 Lezione 16 – Creiamo un Menu di Navigazione con Stile

In questa lezione aggiungiamo a tutte le pagine una **barra di navigazione** orizzontale con sfondo blu, che permette agli utenti di spostarsi tra le pagine del sito.

## 🎓 Cosa Imparerai?

- Come strutturare un menu di navigazione con `<nav>`, `<ul>` e `<li>`
- Come stilizzare la barra di navigazione con CSS: colore di sfondo, padding, display inline
- Come rendere i link del menu bianchi e senza sottolineatura
- Come applicare il menu in modo coerente a tutte le pagine del sito

## 🖼️ Panoramica

Un menu di navigazione si realizza con una lista non ordinata (`<ul>`) dentro il tag semantico `<nav>`. Il CSS trasforma la lista verticale in una barra orizzontale usando `display: inline-block` sugli elementi `<li>`.

```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="seconda_pagina.html">Seconda Pagina</a></li>
        ...
    </ul>
</nav>
```

## 📂 File modificati in questa lezione

| File | Operazione | Descrizione |
|---|---|---|
| Tutti gli `.html` | ✏️ Modificato | Aggiunta la barra di navigazione `<nav>` |
| `default.css` | ✏️ Modificato | Stili per il menu (colore, padding, link bianchi) |

## 🎯 Obiettivo

Alla fine di questa lezione avrai:
- Una barra di navigazione blu presente in tutte le pagine
- Link funzionanti che portano a ciascuna pagina del sito
- Capito come usare `<nav>`, `<ul>`, `<li>` per costruire un menu
