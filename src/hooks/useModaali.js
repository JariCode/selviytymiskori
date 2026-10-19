import { useEffect, useRef } from 'react'

const VALITTAVAT =
  'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'

function useModaali(onSulje) {
  const modaaliRef = useRef(null)
  const onSuljeRef = useRef(onSulje)

  useEffect(() => {
    onSuljeRef.current = onSulje
  })

  useEffect(() => {
    const modaali = modaaliRef.current
    if (!modaali) return undefined

    const edellinen = document.activeElement

    modaali.querySelector(VALITTAVAT)?.focus()

    function kasitteleNappain(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onSuljeRef.current()
        return
      }

      if (event.key !== 'Tab') return

      const elementit = modaali.querySelectorAll(VALITTAVAT)
      if (!elementit.length) return

      const ensimmainen = elementit[0]
      const viimeinen = elementit[elementit.length - 1]

      if (event.shiftKey && document.activeElement === ensimmainen) {
        event.preventDefault()
        viimeinen.focus()
      } else if (!event.shiftKey && document.activeElement === viimeinen) {
        event.preventDefault()
        ensimmainen.focus()
      }
    }

    document.addEventListener('keydown', kasitteleNappain)

    return () => {
      document.removeEventListener('keydown', kasitteleNappain)
      edellinen?.focus?.()
    }
  }, [])

  return modaaliRef
}

export default useModaali