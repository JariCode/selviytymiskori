import { X, ShieldCheck } from 'lucide-react'

function TietosuojaModal({ onSulje }) {
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
        className="tietosuoja-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tietosuoja-otsikko"
      >
        <div className="modal-otsikko">
          <div>
            <ShieldCheck size={22} />
            <h2 id="tietosuoja-otsikko">Tietosuoja ja käyttöehdot</h2>
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
            Selviytymiskori ei edellytä kirjautumista eikä
            rekisteröitymistä. Sovelluksen ostoslista tallennetaan
            selaimen paikalliseen tallennustilaan tällä laitteella.
          </p>
          <p>
            Sovellus ei sisällä omaa käyttäjätiliä, sovelluskohtaista
            palvelintallennusta eikä analytiikkaseurantaa. Selaimen
            tietojen tyhjentäminen tai yksityisen selausistunnon
            sulkeminen voi poistaa listan.
          </p>
          <p>
            Jos sovellus julkaistaan verkkopalvelimella, palveluntarjoaja
            voi käsitellä tavanomaisia palvelinlokeja oman
            tietosuojakäytäntönsä mukaisesti.
          </p>

          <h3>Käyttöehdot</h3>
          <p>
            Selviytymiskori on yksinkertainen henkilökohtainen
            ostoslistatyökalu. Käyttäjä vastaa itse lisäämistään
            tiedoista ja listansa säilyttämisestä.
          </p>
          <p>
            Sovellusta voidaan päivittää ja sen toiminnallisuus voi
            muuttua. Älä käytä sitä ainoana tallennuspaikkana tiedoille,
            joiden menettäminen aiheuttaisi merkittävää haittaa.
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
