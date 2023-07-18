import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  // state vars to handle text transition on button click
  const [text, setText] = useState(".help(filter_my_thoughts());");
  const [isClicked, setClicked] = useState(false);
  const fullText = "creating_your_next_idea();"

  const handleClick = () => {
    setText("");
    setClicked(true);
  }

  // uses timers to handle how fast transition occurs
  useEffect(() => {
    if (isClicked) {
      if (text !== fullText) {
        const timer = setTimeout(() => {
          setText((prevText) => {
            return fullText.substring(0, prevText.length + 1);
          });
        }, 100);

        return () => clearTimeout(timer);
      }
    }
  }, [text, isClicked]);

  // TODO: static gif becomes something new organized and tidy once clicked (we can remove ability to go back and forth once this happens)
  return (
    <>
      <header>
        <Header />
      </header>
      <div className='static'>
        <div className="card">
          <button onClick={handleClick}>
            {text}
          </button>
        </div>        
      </div>
    </>
  )
}

export default App