import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My Showcase</h1>
      <h4>(i think theyre pretty cool)</h4>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <a className='hover-link'>Hire me!</a>
        </p>
      </div>
      <p className="read-the-docs">
        Some card style showcasing of each project along with tags of the 
        frameworks/languages I used to create them.
      </p>
    </>
  )
}

export default App
