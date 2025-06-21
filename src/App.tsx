import { useState } from "react"
import { Menu, X } from "lucide-react"

import imgPrincipalSection from "./assets/imgPrincipalSection.png"
import imgRecurso63X1 from "./assets/imgRecurso63X1.png"
import imgConfusedMaleStudent from "./assets/imgConfusedMaleStudent.png"
import imgHandHoldingPhone from "./assets/imgHandHoldingPhone.png"
import imgHandsHoldingGoldTrophyCup from "./assets/imgHandsHoldingGoldTrophyCup.png"
import imgAppScreenShot from "./assets/imgAppScreenShot.png"
import imgImageLummiAvatars from "./assets/imgImageLummiAvatars.png"
import imgImageLummiAvatars1 from "./assets/imgImageLummiAvatars1.png"
import imgProperty1ImageBackgroundLummi from "./assets/imgProperty1ImageBackgroundLummi.png"

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <h1>Somos Locales</h1>
      <img src={imgPrincipalSection} width="200" />
      <img src={imgRecurso63X1} width="200" />
      <img src={imgConfusedMaleStudent} width="200" />
      <img src={imgHandHoldingPhone} width="200" />
      <img src={imgHandsHoldingGoldTrophyCup} width="200" />
      <img src={imgAppScreenShot} width="200" />
      <img src={imgImageLummiAvatars} width="200" />
      <img src={imgImageLummiAvatars1} width="200" />
      <img src={imgProperty1ImageBackgroundLummi} width="200" />
      <button onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
  )
}