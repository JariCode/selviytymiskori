import { Check } from 'lucide-react'

function Ilmoitus({ teksti }) {
  if (!teksti) return null

  return (
    <div className="ilmoitus" role="status" aria-live="polite">
      <Check size={17} />
      <span>{teksti}</span>
    </div>
  )
}

export default Ilmoitus
