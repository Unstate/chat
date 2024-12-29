import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './public/index.css'
import {Button} from "@shared/ui/button/button.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <main>
          <Button></Button>
      </main>
  </StrictMode>,
)
