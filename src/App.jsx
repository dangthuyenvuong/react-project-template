import { useRoutes } from "react-router-dom"
import { routers } from "./routers"
import { Suspense } from 'react'
import '@/assets/css/tailwind.css'


function App() {
  const element = useRoutes(routers)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {element}
    </Suspense>
  )
}

export default App
