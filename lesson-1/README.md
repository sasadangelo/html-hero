Che cos'è il World Wide Web e cosa sono i documenti HTML
--------------------------------------------------------
Il World Wide Web (WWW) è un'infrastruttura software che permette alle persone
di leggere i cosidetti documenti ipertestuali. Un documento ipertestuale non è
altro che un normale documento dotato di iperlink ossia di parole speciali che
quando cliccati rimandano ad un altro documento.

Il vantaggio rispetto a un documento normale è la possibilità di navigare la
documentazione cercando approfondimenti su una data parola se lo desideriamo.

Il WWW è composto essenzialmente da un computer, chiamato server, che possiede
i documenti. Questo computer è individuabile attraverso un indirizzo sulla rete
Internet chiamato IP (es. 195.168.1.105). Poiché questi indirizzi sono molto
difficili da memorizzare Internet possiede un vocabolario (chiamato DNS) che
permette di associare un nome a questo indirizzo molto facile da ricordare.

Per leggere i documenti si usa uno speciale programma chiamato browser che ha
in alto una barra degli indirizzi dove si può specificare l'indirizzo del
computer server che possiede i documenti che vogliamo leggere.

E' importante non confondere la barra degli indirizzi con la ricerca Google, 
quest'ultima serve per inserire delle parole chiavi e Google vi cerca tutti i
computer server che possiedono documenti con quelle parole chiavi.

Anziché digitare l'indirizzo IP possiamo usare un nome più facile da ricordare
come www.documenti.it. 

Quando scriviamo www.documenti.it nella barra di indirizzi il browser sa che
deve accedere al vocabolario DNS per tradurre quel nome in un indirizzo IP.

www.documenti.it --> 195.168.1.100

A questo punti il browser contatta il computer 195.168.1.100 e gli dice: mi dai
i tuoi documenti?". Il contatto avviene mediante un canale di comunicazione
e un linguaggio di comunicazione speciale chiamato "protocollo HTTP (Hyper Text
Transfer Protocol). Per questo motivo davanti agli indirizzi trovate sempre 
scritto:

http://www.documenti.it

Sul computer server gira uno speciale programma che si chiama "HTTP server" che
riceve la richiesta del browser, da che i documenti che cerca sono in una 
directory del computer e gli invia il primo documento che spesso si chiama
index.html.

GUARDA IL DIAGRAMMA IN FOTO.PNG

Questo documento è scritto in un linguaggio speciale chiamato HTML (Hyper Text
Markup Language) che il browser conosce e sa mostrare a video.

Questa è la struttura di una pagina HTML.

<!DOCTYPE html>     <----------------------------- tipo di documento (HTML)
<html lang="it">    <----------------------------- inizio documento HTML
    <head>          <----------------------------- intestazione
        <title>La Storia di Dragon Ball</title> <- titolo
    </head>
    <body>          <----------------------------- corpo del documento
        Ciao Raffaele <--------------------------- testo del documento
    </body>
</html>

Si noti come ogni tag di apertura (es. <body> ha un relativo tag di chiusura)

