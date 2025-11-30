import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App () {
  const [color, setColor] = useState("white")
    return(
      <div>
        <h1>Three Components in one File</h1>
        <button className="green-btn"
        onClick={() => setColor("green")}>Green</button>

        <button className="red-btn"
        onClick={() => setColor("red")}>Red</button>

        <button className="yellow-btn"
        onClick={() => setColor("yellow")}>Yellow</button>
        
        {/* Color Box */}
        <div className="box"
        style={{ backgroundColor : color }}></div>
      </div>
    )
}
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>

export default App