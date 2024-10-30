import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCrytoStore } from "./store"

function App() {

  const fetchCryptos = useCrytoStore((state) =>state.fetchCrytos)

  useEffect(() =>{
    fetchCryptos()
  },[])

  return (
    <>
      <div className='container'>
        <h1 className='app-title'>Cotizador de <span>criptomonedas</span></h1>

        <div className='content'>
          <CriptoSearchForm />

        </div>
      </div>
    </>
  )
}

export default App
