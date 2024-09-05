import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const suap =  new SuapClient(SUAP_URL, CLIENT_ID, REDIRECT_URI, SCOPE)

  function pegarRecursos() {
    suap.init()
    const v = suap.isAuthenticated()
    console.log(v)
  }

  pegarRecursos()

  return (
    <>
      <div className="card">
        <a onClick={() => setCount((count) => count + 1)} href={suap.getLoginURL()}>
          Autorizar {suap.isAuthenticated()}
        </a>
        {suap.isAuthenticated()}
      </div>  
    </>
  )
}

export default App
