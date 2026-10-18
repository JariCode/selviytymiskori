
import { AlertTriangle, X } from 'lucide-react'

function VahvistusModal({ onVahvista, onPeruuta }) {
  return (
    <div
      className="vahvistus-tausta"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onPeruuta()
        }
      }}
    >
      <section
        className="vahvistus-modal"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="vahvistus-otsikko"
        aria-describedby="vahvistus-kuvaus"
      >
        <div className="vahvistus-kuvake" aria-hidden="true">
          <AlertTriangle size={28} />
        </div>

        <button
          className="vahvistus-sulje"
          type="button"
          onClick={onPeruuta}
          aria-label="Sulje vahvistus"
        >
          <X size={20} />
        </button>

        <span className="vahvistus-tunniste">
          VAHVISTUS VAADITAAN
        </span>

        <h2 id="vahvistus-otsikko">
          Tyhjennetäänkö lista?
        </h2>

        <p id="vahvistus-kuvaus">
          Haluatko varmasti poistaa kaikki ostoslistan tuotteet?
          Tätä toimintoa ei voi perua.
        </p>

        <div className="vahvistus-toiminnot">
          <button
            className="vahvistus-peruuta"
            type="button"
            onClick={onPeruuta}
          >
            PERUUTA
          </button>

          <button
            className="vahvistus-hyvaksy"
            type="button"
            onClick={onVahvista}
            autoFocus
          >
            TYHJENNÄ LISTA
          </button>
        </div>
      </section>
    </div>
  )
}

export default VahvistusModal
