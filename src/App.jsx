import Quote from './Quote.jsx';
import headshot from './kanye-west-headshot.jpg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [kanyeQuote, setKanyeQuote] = useState('');

  const grabQuote = () => {
    fetch('http://api.kanye.rest')
      .then(res => {
        return res.json()
      })
      .then(data => {
        return setKanyeQuote(data.quote)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    grabQuote();
  }, [])

  return (
    <div className="App">
      <img 
        className="Yeezy"
        src={headshot}
        alt="Kanye's Headshot"
      ></img>
      <main id="quote-box">
        <Quote 
          kanyeQuote={kanyeQuote}
          grabQuote={grabQuote}
        />
      </main>
    </div>
  );
}

export default App;
