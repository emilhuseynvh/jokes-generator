import { useEffect, useState } from "react"
import React from 'react'
import Jokes from './Jokes'
import Button from './Button'

function Card() {
    const [data, setData] = useState(null)
    const newJokes = () => {
        fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
        .then(response => response.json())
        .then(data => setData(data.joke))
    }
    useEffect(() => {
        newJokes();
    }, []);
  return (
    <div className='card'>
        <h1>Joke Generator</h1>
        <Jokes data={data}/>
        <Button newJokes={newJokes} data={data}/>
    </div>
  )
}

export default Card