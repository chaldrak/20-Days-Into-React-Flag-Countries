import { useState } from 'react'
import './App.css'
import CountriesButtons from './composants/SingleBouton.jsx'

function App() {

  const [country, setCountry] = useState('')


  return (
    <div style={{display: 'flex', alignItems: 'center', height: '100vh'}}>
      <section style={{padding: '20px', width: '60%', height: '100%'}}>
        <CountriesButtons onclick={setCountry} />
      </section>
      <section style={{  margin: '0 auto' }}>
        <p>{country}</p>
      </section>
    </div>
  )
}

export default App
