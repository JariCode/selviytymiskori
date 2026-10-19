import { X, ShieldCheck } from 'lucide-react'
import useModaali from '../hooks/useModaali'

function TietosuojaModal({ onSulje }) {
  const modaaliRef = useModaali(onSulje)

  return (
    <div
      className="modal-tausta"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onSulje()
        }
      }}
    >
      <section
        ref={modaaliRef}
        className="tietosuoja-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tietosuoja-otsikko"
      >
        <div className="modal-otsikko">
          <div>
            <ShieldCheck size={22} />
            <h2 id="tietosuoja-otsikko">
              Tietosuoja ja käyttöehdot
            </h2>
          </div>

          <button
            type="button"
            className="modal-sulje"
            onClick={onSulje}
            aria-label="Sulje ikkuna"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-sisalto">
          <h3>Tietosuoja</h3>

          <p>
            Selviytymiskori on maksuton harrasteprojektina
            toteutettu ostoslistasovellus. Sovellus ei edellytä
            kirjautumista eikä rekisteröitymistä.
          </p>

          <p>
            Ostoslista tallennetaan käyttäjän selaimen paikalliseen
            tallennustilaan. Sovelluksella ei ole omaa käyttäjätiliä
            tai sovelluskohtaista palvelintietokantaa, eikä sovellus
            käytä analytiikkaseurantaa.
          </p>

          <p>
            Ostoslista voi kadota, jos selaimen tallennustiedot
            tyhjennetään, selaimen yksityinen istunto suljetaan
            tai laitteen tiedot menetetään. Sovellus ei synkronoi
            listaa automaattisesti muiden laitteiden välillä.
          </p>

          <p>
            Verkkopalvelun hosting-palveluntarjoaja voi käsitellä
            palvelun tekniseen toimintaan ja tietoturvaan liittyviä
            tietoja, kuten palvelinlokeja, oman tietosuojakäytäntönsä
            ja sovellettavan lainsäädännön mukaisesti.
          </p>

          <p>
            Tietosuojaa koskevissa kysymyksissä voit ottaa yhteyttä:
            {' '}
            <a href="mailto:jaricode@elisanet.fi">
              jaricode@elisanet.fi
            </a>
          </p>

          <h3>Käyttöehdot</h3>

          <p>
            Selviytymiskori on maksuton ostoslistasovellus,
            joka on tarkoitettu ostoslistojen helppoon hallintaan.
            Sovellus on toteutettu harrasteprojektina.
          </p>

          <p>
            Käyttäjä vastaa itse lisäämistään tiedoista ja niiden
            säilyttämisestä. Sovelluksen toimivuutta tai tietojen
            säilymistä ei voida taata kaikissa tilanteissa.
          </p>

          <p>
            Sovellusta voidaan päivittää, muuttaa tai sen tarjoaminen
            voidaan lopettaa. Älä käytä sovellusta ainoana
            tallennuspaikkana tiedoille, joiden menettäminen
            aiheuttaisi merkittävää haittaa.
          </p>

          <p>
            Verkkosivusto:{' '}
            <a
              href="https://jaricode.fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              jaricode.fi
            </a>
          </p>

          <p>
            <strong>Viimeksi päivitetty:</strong> 18.10.2026
          </p>
        </div>

        <button
          className="ensisijainen-painike modal-valmis"
          type="button"
          onClick={onSulje}
        >
          SELVÄ
        </button>
      </section>
    </div>
  )
}

export default TietosuojaModal