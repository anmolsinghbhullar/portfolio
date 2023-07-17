import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [cardClicked, setCardClicked] = useState(true);

  const handleClick = () => {
    setCardClicked(!cardClicked);
  }

  // TODO: implement transition state between two button text states
  // TODO: static gif becomes something new organized and tidy once clicked (we can remove ability to go back and forth once this happens)
  return (
    <>
      <header>
        <Header />
      </header>
      <div className='static'>
        <div className="card">
          <button onClick={handleClick}>
            {cardClicked ? '.help({user: me}, {action: filter_thoughts()}))' : 'creating_your_next_idea()'}
          </button>
        </div>        
      </div>
    </>
  )
}

export default App