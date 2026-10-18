
# Selviytymiskori

**Varaudu paremmin. Selviydy pidemmälle.**

Selviytymiskori on Reactilla ja Vitellä toteutettu maksuton ostoslistasovellus, joka on kehitetty harrasteprojektina. Sovellus yhdistää helppokäyttöisen ostoslistan postapokalyptiseen visuaaliseen ilmeeseen ja tarjoaa yksinkertaisen tavan hallita ostettavia tuotteita ilman kirjautumista tai rekisteröitymistä.

## Ominaisuudet

- **Visuaalinen etusivu** – tumma, selviytymisteemainen käyttöliittymä.
- **Ostosten hallinta** – lisää tuotteita listalle ja merkitse ne ostetuiksi.
- **Tuotteiden poistaminen** – ostamattoman tuotteen voi poistaa listalta.
- **Edistymisen seuranta** – näe ostettujen ja vielä hankittavien tuotteiden määrä.
- **Automaattinen tallennus** – ostoslista tallentuu selaimen paikalliseen `localStorage`-tallennustilaan.
- **Responsiivinen käyttöliittymä** – käyttöliittymä mukautuu tietokoneille ja mobiililaitteille.
- **PWA-tuki** – sovellus voidaan asentaa tuetuilla selaimilla. Service workerin välimuistitus mahdollistaa määritettyjen resurssien käytön myös offline-tilassa.

## Teknologiat

- React
- Vite
- JavaScript
- CSS
- Lucide React
- vite-plugin-pwa

## Käynnistäminen

Asenna riippuvuudet:

```bash
npm install
```

Käynnistä kehityspalvelin:

```bash
npm run dev
```

Tarkista koodi ESLintillä:

```bash
npm run lint
```

Luo tuotantoversio:

```bash
npm run build
```

Tuotantoversion tiedostot luodaan `dist`-hakemistoon.

## Tallennus ja tietosuoja

Sovellus ei edellytä käyttäjätiliä eikä käytä omaa backend-palvelinta tai tietokantaa. Ostoslista tallennetaan käyttäjän selaimen `localStorage`-tallennustilaan, joten tiedot ovat selainkohtaisia eivätkä synkronoidu automaattisesti muiden laitteiden välillä.

Selaimen tallennustietojen tyhjentäminen voi poistaa tallennetun ostoslistan. Verkkopalvelun hosting-palveluntarjoaja voi lisäksi käsitellä palvelun tekniseen toimintaan liittyviä tietoja, kuten palvelinlokeja.

## Tavoite

Selviytymiskori yhdistää selkeän ostoslistan, käytännölliset toiminnot ja omaleimaisen postapokalyptisen visuaalisen ilmeen helposti käytettäväksi verkkosovellukseksi.
