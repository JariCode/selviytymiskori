import { ShieldCheck, ShoppingBasket } from 'lucide-react'

function Header({ onEtusivu }) {
  return (
    <header className="ylapalkki">
      <button
        className="brandi"
        type="button"
        onClick={onEtusivu}
        aria-label="Siirry Selviytymiskorin etusivulle"
      >
        <span className="brandi-kuvake">
          <ShoppingBasket size={23} strokeWidth={1.8} />
        </span>

        <span className="brandi-tekstit">
          <span className="brandi-nimi">SELVIYTYMISKORI</span>
          <span className="brandi-ala">VARAUDU PAREMMIN</span>
        </span>
      </button>

      <div className="tila-merkki">
        <span className="tila-piste" />
        <ShieldCheck size={15} />
        <span>VALMIINA KÄYTTÖÖN</span>
      </div>
    </header>
  )
}

export default Header
