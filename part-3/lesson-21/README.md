# 📘 Lezione 21 – Creiamo la pagina "Inizia Qui"

In questa lezione creiamo la pagina **Inizia Qui**, che accoglie i nuovi visitatori spiegando chi è l'autore del sito, qual è la sua filosofia e come iniziare a usare il sito. È la pagina a cui rimandare chi approda per la prima volta.

## 🎓 Cosa Imparerai?

Durante questa lezione scoprirai come:

- Usare il tag `<figure>` con `<figcaption>` per le immagini con didascalia
- Usare `<strong>` per evidenziare concetti chiave nel testo
- Strutturare una pagina lunga con più `<h2>` come sottosezioni
- Inserire immagini responsive con la classe `responsive_img`
- Aggiornare il menu per includere la nuova pagina

## 🖼️ Panoramica

La pagina "Inizia Qui" usa gli stessi tag HTML della pagina Chi Sono, ma introduce `<figure>` e `<figcaption>`: un modo semantico per associare una didascalia a un'immagine.

```html
<figure>
    <img class="responsive_img" src="assets/img/software-developer2.jpg" alt="Software Developer">
    <figcaption>Foto da <a href="...">clipartstation.com</a></figcaption>
</figure>
```

## 📂 File modificati in questa lezione

| File | Operazione | Descrizione |
|---|---|---|
| `inizia_qui.html` | ✨ Nuovo | La nuova pagina "Inizia Qui" |
| Tutti gli `.html` | ✏️ Modificato | Menu aggiornato con link a "Inizia Qui" |

## 🎯 Obiettivo

Alla fine di questa lezione avrai:
- Creato la pagina `inizia_qui.html` con contenuto reale strutturato in sezioni
- Usato `<figure>` e `<figcaption>` per le immagini con didascalia
- Compreso la differenza semantica tra `<img>` semplice e `<figure>`
