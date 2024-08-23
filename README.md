# WordsCounter Documentation

Questo progetto è un'applicazione CLI (Command Line Interface) che analizza il contenuto di un file di testo o di una URL fornita come argomento. Esegue le seguenti operazioni:

1. **Conteggio delle parole**: Calcola e stampa il numero totale di parole nel file.
2. **Conteggio delle lettere**: Calcola e stampa il numero totale di lettere nel file.
3. **Conteggio degli spazi**: Calcola e stampa il numero totale di spazi nel file.
4. **Parole più frequenti**: Identifica e stampa le parole più frequenti nel file, con un minimo di ripetizioni specificato.

Il progetto utilizza due classi principali:

- **ContentReader**: Legge il contenuto del file o della URL.
- **TextAnalyzer**: Analizza il contenuto del testo per ottenere le statistiche sopra menzionate.

L'output dell'applicazione include le statistiche calcolate e viene stampato sulla console.

---

Per installare questa applicazione in Node.js e TypeScript, dovrai seguire questi passi:

### 1. Configurazione del progetto

Prima di tutto, configura il progetto.

### a. Copia il progetto

Installa il codice nella cartella `words-counter/` tramite copia o clonando il progetto via git

```
git clone https://github.com/dynamick/words-counter.git
```

### b. Entra nella cartella

```jsx
cd words-counter
```

### c. Installa i pacchetti necessari

```bash
npm i
```

### 2. Compilazione dell'applicazione

Per compilare l'applicazione, esegui il seguente comando:

```jsx
npm run build
```

### 3. Esecuzione dell’applicazione

```jsx
npm run start ./src/data/example.txt
```

### Tests

Per eseguire i test con il comando:

```bash
npm run test
```
