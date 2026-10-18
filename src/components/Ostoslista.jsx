
import {
  ArrowLeft,
  CheckCheck,
  CircleAlert,
  ClipboardList,
  Plus,
  ShoppingBasket,
  Trash2
} from 'lucide-react'
import Tuoterivi from './Tuoterivi'

function Ostoslista({
  tuotteet,
  uusiTuote,
  setUusiTuote,
  lisaaTuote,
  vaihdaTila,
  poistaTuote,
  tyhjennaLista,
  ostamatta,
  ostettu,
  edistyminen,
  onTakaisin
}) {
  return (
    <section className="ostosnakyma">
      <button
        className="takaisin-painike"
        type="button"
        onClick={onTakaisin}
      >
        <ArrowLeft size={16} />
        ETUSIVULLE
      </button>

      <div className="ostosotsikko">
        <div>
          <div className="varoitus">
            <span className="pieni-vihrea-piste" />
            OSTOSLISTA / TARVIKKEET
          </div>

          <h1>
            Ostos<span>lista.</span>
          </h1>

          <p>
            Lisää ostettavat tuotteet ja merkitse ne hankituiksi.
          </p>
        </div>

        <div className="ostosmerkki" aria-hidden="true">
          <ShoppingBasket size={36} strokeWidth={1.2} />
        </div>
      </div>

      <form className="lisauslomake" onSubmit={lisaaTuote}>
        <label htmlFor="uusi-tuote">LISÄÄ TUOTE</label>

        <div className="lisauskentta">
          <Plus size={20} aria-hidden="true" />

          <input
            id="uusi-tuote"
            type="text"
            value={uusiTuote}
            onChange={(event) => setUusiTuote(event.target.value)}
            placeholder="Esim. maito, leipä, kahvi..."
            maxLength={100}
            autoComplete="off"
            required
          />

          <button
            type="submit"
            disabled={!uusiTuote.trim()}
          >
            <Plus size={17} />
            LISÄÄ
          </button>
        </div>
      </form>

      <div
        className="edistyminen"
        aria-label={`Ostokset ${ostettu} / ${tuotteet.length}`}
      >
        <div className="edistyminen-teksti">
          <span>OSTOKSET</span>
          <span>
            {ostettu} / {tuotteet.length} KORISSA
          </span>
        </div>

        <div
          className="edistymispalkki"
          role="progressbar"
          aria-label="Ostosten edistyminen"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={edistyminen}
        >
          <span style={{ width: `${edistyminen}%` }} />
        </div>
      </div>

      <div className="listaotsikko">
        <h2>
          <ClipboardList size={19} />
          TUOTTEET <span>({tuotteet.length})</span>
        </h2>

        <button
          className="tyhjenna-painike"
          type="button"
          onClick={tyhjennaLista}
          disabled={!tuotteet.length}
        >
          <Trash2 size={15} />
          TYHJENNÄ LISTA
        </button>
      </div>

      {tuotteet.length === 0 ? (
        <div className="tyhja-lista">
          <div className="tyhja-kuvake">
            <ShoppingBasket size={35} strokeWidth={1.2} />
          </div>

          <h3>Lista on tyhjä.</h3>

          <p>
            Lisää ensimmäinen tuote yllä olevaan kenttään.
            Ostoslistasi tallentuu automaattisesti selaimeen.
          </p>
        </div>
      ) : (
        <div className="tuotelista">
          {tuotteet.map((tuote, indeksi) => (
            <Tuoterivi
              key={tuote.id}
              tuote={tuote}
              indeksi={indeksi}
              onVaihdaTila={vaihdaTila}
              onPoista={poistaTuote}
            />
          ))}
        </div>
      )}

      <div className="listan-alatunniste">
        <span>
          <CheckCheck size={15} />
          {ostettu} KORISSA
        </span>
        <span>
          <CircleAlert size={15} />
          {ostamatta} KERÄÄMÄTTÄ
        </span>
      </div>

      <p className="poisto-ohje">
        <CircleAlert size={14} />
        Koriin lisätyn tuotteen poistaminen onnistuu, kun poistat ensin valinnan.
      </p>
    </section>
  )
}

export default Ostoslista
