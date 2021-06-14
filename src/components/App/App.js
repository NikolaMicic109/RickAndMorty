
import { useState } from "react"
import './App.css';
import Characters from "../Characters/Characters"
import Single from "../Single/Single"


const App = () => {


  const [stateId, setStateId] = useState(null)

  return (
    <div className="App">
      <header>
        <h3 onClick={() => setStateId(null)}>Rick and Morty Wiki</h3>
      </header>
      {!stateId ? <Characters onIdChange={setStateId} /> : <Single id={stateId} />}


    </div>
  )
}

export default App;
