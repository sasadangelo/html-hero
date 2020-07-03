La struttura di un documento HTML - Sezioni e Intestazioni
----------------------------------------------------------
Un documento HTML è tipicamente diviso in sezioni. Ciascuna sezione ha un
titolo. Ogni sezione può avere una o più sotto sezioni, che a sua volta può
avere una o più sotto sezioni fino ad un massimo di annidamento di 5.

Il titolo di una sezione viene chiamato Intestazione e non va confuso con il
titolo della pagina web.

Le sezioni con le relative Intestazioni vanno inclusi tra i tag:

<body> 
... 
</body>

L'Intestazione principale va inclusa tra i tag:

<h1> .. <h1>

Ad esempio, possiamo avere:

<body>
...
    <h1>La storia di Dragon Ball</h1>
...
</body>

Ci possono essere una o più intestazioni principali:

<body>
...
    <h1>La storia di Dragon Ball</h1>
...
    <h1>La storia di Pollicino</h1>
...
</body>

Ciascuna sezione di livello 1 può avere una o più sottosezioni di livello 2.

<body>
...
    <h1>La storia di Dragon Ball</h1>
...
    <h2>Sotto Sezione livello 2 a)</h2>
...
    <h2>Sotto Sezione livello 2 b)</h2>
...
    <h1>La storia di Pollicino</h1>
...
    <h2>Sotto Sezione livello 2 a)</h2>
...
    <h2>Sotto Sezione livello 2 b)</h2>
...
</body>

Così si può continuare fino a sotto sezioni di livello 5. 
