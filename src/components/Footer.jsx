import { ShieldAlert } from 'lucide-react'

function Footer({ onAvaaTietosuoja }) {
  return (
    <footer className="alatunniste">
      <span>
        SELVIYTYMISKORI
        <span className="alatunniste-erotin"> / </span>
        OSTOSLISTA ILMAN TURHAA SÄÄTÖÄ
      </span>

      <div className="alatunniste-oikea">
        <span className="paikallinen-merkinta">
          <ShieldAlert size={14} />
          TIEDOT TALLENNETAAN LAITTEELLESI
        </span>

        <button
          className="alatunniste-linkki"
          type="button"
          onClick={onAvaaTietosuoja}
        >
          Tietosuoja ja käyttöehdot
        </button>
      </div>
    </footer>
  )
}

export default Footer
