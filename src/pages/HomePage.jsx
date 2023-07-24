import './HomePage.css';
import React from 'react';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';

function HomePage() {
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
            <Layout>
				<div className='static'>
                  	<button onClick={handleClick}>
                    	{text}
                	</button>
              	</div>
            </Layout>
        </>
    );
}

export default HomePage;