import React, {useEffect, useState } from "react";
import JokeItem from "../components/JokeItem";

export default function Joke() {
  const [joke, setJoke] = useState(null)

  async function callJokes(){
    let url= "https://official-joke-api.appspot.com/random_joke";
    let j = await fetch(url);
    let parsedJoke= await j.json()
    setJoke(parsedJoke)
  }

  useEffect(() => {
    callJokes()
  }, [])
  

  return (
    <div>
      {
        joke ? 
          <JokeItem id={joke.id} punchline={joke.punchline} setup={joke.setup} type={joke.type} />
          : "No Jokes"
      }
    </div>
  )
}


