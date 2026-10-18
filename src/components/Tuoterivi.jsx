
import { Check, X } from 'lucide-react'

function Tuoterivi({ tuote, indeksi, onVaihdaTila, onPoista }) {
  return (
    <div
      className={`tuoterivi ${tuote.ostettu ? 'tuote-ostettu' : ''}`}
    >
      <span className="tuote-numero">
        {String(indeksi + 1).padStart(2, '0')}
      </span>

      <label className="tuote-valinta">
        <input
          type="checkbox"
          checked={tuote.ostettu}
          onChange={() => onVaihdaTila(tuote.id)}
          aria-label={`Merkitse ${tuote.nimi} ${
            tuote.ostettu ? 'ostamattomaksi' : 'ostetuksi'
          }`}
        />

        <span className="oma-valintaruutu" aria-hidden="true">
          <Check size={14} />
        </span>

        <span className="tuote-nimi">{tuote.nimi}</span>
      </label>

      {tuote.ostettu ? (
        <span className="hankittu-merkinta">KORISSA</span>
      ) : (
        <button
          className="poista-tuote"
          type="button"
          onClick={() => onPoista(tuote.id)}
          aria-label={`Poista ${tuote.nimi}`}
          title="Poista tuote"
        >
          <X size={19} />
        </button>
      )}
    </div>
  )
}

export default Tuoterivi
