import React, { useState } from 'react'
import './App.css'

const api = {
  base: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
};

export const App = () => {
  const [query, setQuery] = useState(''); 
  const [nasa, setNasa] = useState({}); 

  const search = (evt) => {
      fetch(`${api.base}`)
      .then(res => res.json()) 
      .then(result => {
        setNasa(result); 
        setQuery(''); 
        console.log(result);
       
      });
    
  }

  return (
<div className="container">
  <div>
    <h1>astronomy picture of the day</h1>
  <button onClick={search} value={query} onChange={e => setQuery(e.target.value)}>Click for results</button>
  <img src={nasa.hdurl} />
  <div className="mainelement">{nasa.explanation}</div>
</div>
{(typeof nasa.main != "undefined") ? (
  <div></div> // empty div to trigger typeof function method 

  ) : ('')}

</div>
    
  )
}

export default App;