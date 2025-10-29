1. Obiettivo del progetto

L’obiettivo del progetto è realizzare un’applicazione web che permetta la gestione visuale delle issue, cioè attività o compiti, attraverso una Kanban Board interattiva.
L’applicazione consente all’utente di creare nuove issue tramite un form modale dedicato e di organizzarle in diverse fasi del loro ciclo di vita, rappresentate da quattro colonne principali: Backlog, In Progress, Review e Done.

Ogni operazione, come la creazione, lo spostamento o l’eliminazione di un’issue, aggiorna automaticamente la board e viene salvata nel localStorage, garantendo la persistenza dei dati anche dopo la chiusura della pagina.
L’interfaccia è pensata per essere semplice, intuitiva e facilmente utilizzabile da qualsiasi utente, anche senza competenze tecniche specifiche.

2. Stakeholder e Utenti finali

Stakeholder principali:

Team di sviluppo: collabora alla progettazione dell’interfaccia, alla scrittura del codice e alle fasi di test.

Utenti finali:

Lavoratori, studenti e persone comuni che desiderano tenere traccia delle proprie attività o impegni quotidiani in modo organizzato e visivo.

L’applicazione può essere utilizzata sia in ambito professionale, per la gestione di progetti o task lavorativi, sia in contesti personali come per pianificare obiettivi o attività giornaliere.

È pensata per essere intuitiva, accessibile e utile a chiunque voglia migliorare la gestione del proprio tempo o delle proprie attività.

3. Requisiti funzionali

Creazione di una nuova issue
L’utente può compilare un form “Nuova issue” inserendo le informazioni necessarie (titolo, descrizione, priorità, ecc.). Una volta confermato l’invio, la nuova issue viene aggiunta automaticamente alla colonna Backlog e salvata nel localStorage.

Visualizzazione delle issue
Ogni issue viene rappresentata come una card che riporta i dati inseriti nel form e viene visualizzata nella colonna corrispondente al suo stato.

Cambio di stato
L’utente può spostare un’issue tra le varie colonne della board (ad esempio da In Progress a Review), aggiornandone così lo stato. Le modifiche vengono salvate automaticamente.

Eliminazione delle issue
Ogni card include un pulsante per l’eliminazione, che rimuove l’issue sia dalla board che dal localStorage.

Persistenza dei dati
Tutte le issue create vengono salvate nel localStorage del browser, permettendo di mantenere i dati anche dopo la chiusura o l’aggiornamento della pagina.

Aggiornamento automatico
Ogni operazione — creazione, modifica o eliminazione — produce un aggiornamento immediato e visibile dell’interfaccia senza ricaricare la pagina.

4. Requisiti non funzionali

Usabilità: interfaccia semplice, chiara e facilmente comprensibile.

Reattività: aggiornamenti istantanei della board in seguito a ogni azione dell’utente.

Persistenza locale: utilizzo del localStorage come sistema di salvataggio dei dati senza necessità di server o database esterni.

Accessibilità: utilizzo di colori leggibili e contrasti adeguati per garantire una buona visibilità.

Responsività: adattabilità dell’interfaccia a dispositivi di dimensioni diverse (desktop, tablet, mobile).

5. Requisiti opzionali / futuri (nice-to-have)

Filtri di ricerca per titolo, stato o priorità.

Etichette colorate per indicare la priorità o la categoria delle issue.

Animazioni o transizioni grafiche per migliorare l’esperienza d’uso.

Conferma prima della cancellazione definitiva di un’issue.

Ordinamento automatico per data di creazione o livello di priorità.
