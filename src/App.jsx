import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Etusivu from './components/Etusivu'
import Ostoslista from './components/Ostoslista'
import Ilmoitus from './components/Ilmoitus'
import TietosuojaModal from './components/TietosuojaModal'
import VahvistusModal from './components/VahvistusModal'
import './App.css'

const STORAGE_KEY = 'selviytymiskori-ostokset-v1'

function lueTallennettuLista() {
  try {
    const tallennettu = localStorage.getItem(STORAGE_KEY)
    const lista = tallennettu ? JSON.parse(tallennettu) : []

    if (!Array.isArray(lista)) {
      return []
    }

    return lista
      .filter(
        (tuote) =>
          tuote &&
          typeof tuote.id === 'string' &&
          typeof tuote.nimi === 'string'
      )
      .map((tuote) => ({
        id: tuote.id,
        nimi: tuote.nimi.slice(0, 100),
        ostettu: tuote.ostettu === true
      }))
  } catch {
    return []
  }
}

function App() {
  const [nakyma, setNakyma] = useState('etusivu')
  const [tuotteet, setTuotteet] = useState(lueTallennettuLista)
  const [uusiTuote, setUusiTuote] = useState('')
  const [ilmoitus, setIlmoitus] = useState(null)
  const [tietosuojaAuki, setTietosuojaAuki] = useState(false)
  const [vahvistusAuki, setVahvistusAuki] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tuotteet))
    } catch {
      setIlmoitus({
        teksti: 'Tallennus ei onnistunut. Tarkista selaimen tallennustila-asetukset.',
        aika: Date.now()
      })
    }
  }, [tuotteet])

  useEffect(() => {
    if (!ilmoitus) return undefined

    const ajastin = window.setTimeout(() => {
      setIlmoitus(null)
    }, 3000)

    return () => window.clearTimeout(ajastin)
  }, [ilmoitus])

  const ostamatta = useMemo(
    () => tuotteet.filter((tuote) => !tuote.ostettu).length,
    [tuotteet]
  )

  const ostettu = tuotteet.length - ostamatta

  const edistyminen = tuotteet.length
    ? Math.round((ostettu / tuotteet.length) * 100)
    : 0

  function naytaIlmoitus(teksti) {
    setIlmoitus({ teksti, aika: Date.now() })
  }

  function lisaaTuote(event) {
    event.preventDefault()

    const nimi = uusiTuote.trim()

    if (!nimi) return

    const uusi = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      nimi,
      ostettu: false
    }

    setTuotteet((nykyiset) => [...nykyiset, uusi])
    setUusiTuote('')
    naytaIlmoitus(`${nimi} lisätty ostoslistalle.`)
  }

  function vaihdaTila(id) {
    setTuotteet((nykyiset) =>
      nykyiset.map((tuote) =>
        tuote.id === id
          ? { ...tuote, ostettu: !tuote.ostettu }
          : tuote
      )
    )
  }

  function poistaTuote(id) {
    const tuote = tuotteet.find((rivi) => rivi.id === id)

    if (!tuote) return

    setTuotteet((nykyiset) =>
      nykyiset.filter((rivi) => rivi.id !== id)
    )

    naytaIlmoitus('Tuote poistettu ostoslistalta.')
  }

  function tyhjennaLista() {
    if (!tuotteet.length) return

    setVahvistusAuki(true)
  }

  function vahvistaTyhjennys() {
    setTuotteet([])
    setVahvistusAuki(false)
    naytaIlmoitus('Ostoslista tyhjennetty.')
  }

  return (
    <div className="sovellus">
      <div className="taustakuvio" aria-hidden="true" />

      <Header onEtusivu={() => setNakyma('etusivu')} />

      <main id="sisalto">
        {nakyma === 'etusivu' ? (
          <Etusivu
            onAvaaLista={() => setNakyma('lista')}
            ostamatta={ostamatta}
            tuotteita={tuotteet.length}
          />
        ) : (
          <Ostoslista
            tuotteet={tuotteet}
            uusiTuote={uusiTuote}
            setUusiTuote={setUusiTuote}
            lisaaTuote={lisaaTuote}
            vaihdaTila={vaihdaTila}
            poistaTuote={poistaTuote}
            tyhjennaLista={tyhjennaLista}
            ostamatta={ostamatta}
            ostettu={ostettu}
            edistyminen={edistyminen}
            onTakaisin={() => setNakyma('etusivu')}
          />
        )}
      </main>

      <Ilmoitus teksti={ilmoitus?.teksti} />

      <Footer onAvaaTietosuoja={() => setTietosuojaAuki(true)} />

      {tietosuojaAuki && (
        <TietosuojaModal
          onSulje={() => setTietosuojaAuki(false)}
        />
      )}

      {vahvistusAuki && (
        <VahvistusModal
          onVahvista={vahvistaTyhjennys}
          onPeruuta={() => setVahvistusAuki(false)}
        />
      )}
    </div>
  )
}

export default App