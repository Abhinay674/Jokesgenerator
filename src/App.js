import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    getJokes()
  }, [])

  const getJokes = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    setJoke(data.value);
  }

  return (
    <div className='box' >
      <h3>Chuck Norris Joke Generator</h3>
      <p>{joke}</p>
      <button onClick={getJokes} >Get new joke</button>
    </div>
  )
}

export default App
