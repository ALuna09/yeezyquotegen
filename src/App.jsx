import Quote from './Quote.jsx';
import headshot from './kanye-west-headshot.jpg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [kanyeQuote, setKanyeQuote] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        return setKanyeQuote(data.quote)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <img 
        className="Yeezy"
        src={headshot}
        alt="Kanye's Headshot"
      ></img>
      <span id="quote-box">
        <Quote 
          kanyeQuote={kanyeQuote}
          setKanyeQuote={setKanyeQuote}
        />
        {/* <NewQuote /> */}
      </span>
    </div>
  );
}

export default App;
