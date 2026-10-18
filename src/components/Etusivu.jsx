import {
  ArrowRight,
  Check,
  ClipboardList,
  CircleAlert,
  Crosshair,
  ShieldCheck,
  ShoppingBasket,
  Skull,
  TriangleAlert
} from 'lucide-react'

function Etusivu({ onAvaaLista, ostamatta, tuotteita }) {
  return (
    <section className="etusivu">
      <div className="ylatunniste">
        <span className="ylatunniste-viiva" />
        VARAUTUMINEN ALKAA SUUNNITTELUSTA
        <span className="ylatunniste-viiva" />
      </div>

      <div className="sankari">
        <div className="sankari-teksti">
          <div className="varoitus">
            <TriangleAlert size={15} />
            PIDÄ TÄRKEIMMÄT TARVIKKEET MIELESSÄ
          </div>

          <h1>
            Varaudu
            <br />
            paremmin.
            <br />
            <span>Selviydy pidemmälle.</span>
          </h1>

          <p className="sankari-kuvaus">
            Yksinkertainen ostoslista arkeen ja poikkeustilanteisiin.
            Kerää tarvittavat tuotteet yhteen paikkaan ja seuraa,
            mitä vielä puuttuu.
          </p>

          <button
            className="ensisijainen-painike"
            type="button"
            onClick={onAvaaLista}
          >
            <ClipboardList size={19} />
            AVAA OSTOSLISTA
            <ArrowRight size={18} />
          </button>

          <div className="luottamus-rivi">
            <span>
              <Check size={14} />
              Ei kirjautumista
            </span>
            <span>
              <Check size={14} />
              Lista tallentuu selaimeen
            </span>
          </div>
        </div>

        <div
          className="sankari-kuvitus"
          role="img"
          aria-label="Selviytymiskorin tunnuskuvitus"
        >
          <div className="kuvitus-keha keha-ulkoinen" />
          <div className="kuvitus-keha keha-sisempi" />

          <div className="kuvitus-keskus">
            <ShoppingBasket size={84} strokeWidth={1} />
          </div>

          <div className="kuvitus-risti">
            <Crosshair size={24} />
          </div>

          <div className="kuvitus-koodi">
            SVK / 001
            <br />
            TARVIKEHALLINTA
          </div>

          <div className="kuvitus-tila">
            <span />
            VALMIUSTASO 01
          </div>

          <div className="kuvitus-kulma kulma-1" />
          <div className="kuvitus-kulma kulma-2" />
          <div className="kuvitus-kulma kulma-3" />
          <div className="kuvitus-kulma kulma-4" />
        </div>
      </div>

      <div className="tilannepaneeli">
        <div className="paneeli-otsikko">
          <span className="pieni-vihrea-piste" />
          OSTOSLISTAN TILANNE
        </div>

        <div className="tilannekortit">
          <div className="tilannekortti">
            <span className="kortti-kuvake">
              <ClipboardList size={18} />
            </span>
            <span className="kortti-arvo">
              {String(tuotteita).padStart(2, '0')}
            </span>
            <span className="kortti-selite">TUOTETTA LISTALLA</span>
          </div>

          <div className="tilannekortti">
            <span className="kortti-kuvake">
              <CircleAlert size={18} />
            </span>
            <span className="kortti-arvo">
              {String(ostamatta).padStart(2, '0')}
            </span>
            <span className="kortti-selite">HANKITTAVANA</span>
          </div>

          <div className="tilannekortti">
            <span className="kortti-kuvake">
              <Skull size={18} />
            </span>
            <span className="kortti-arvo kortti-tila">
              {tuotteita === 0
                ? 'TYHJÄ'
                : ostamatta === 0
                  ? 'VALMIS'
                  : 'KESKEN'}
            </span>
            <span className="kortti-selite">LISTAN TILA</span>
          </div>
        </div>
      </div>

      <div className="etusivu-alareuna">
        <span>
          <span className="vihrea-teksti">01</span> / KIRJAA TARPEET
        </span>
        <span>
          <span className="vihrea-teksti">02</span> / MERKITSE KERÄTYT
        </span>
        <span>
          <span className="vihrea-teksti">03</span> / PIDÄ LISTA AJAN TASALLA
        </span>
      </div>

      <div className="etusivu-turvahuomio">
        <ShieldCheck size={16} />
        Ei tilejä eikä käyttäjäprofiileja. Ostoslista pysyy tässä selaimessa.
      </div>
    </section>
  )
}

export default Etusivu
