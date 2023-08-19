import React, { Component, useEffect, useState } from "react";
import JokeItem from "../components/JokeItem";

// export class Joke extends Component { 
//   // data= [
//   //   {
//   //     "type":"general","setup":"What did celery say when he broke up with his girlfriend?","punchline":"She wasn't right for me, so I really don't carrot all.","id":160
//   //   }
//   // ]
   
//   constructor()
//   {
//       super();
//       // console.log("Hello i am constructor")
//       this.state= [{ 
//             type: "",
//             setup: "",
//             punchline: "",
//             id: "" 
//          }]
      
//   }
//   async componentDidMount(){
//     let url= "https://official-joke-api.appspot.com/random_joke";
//     let joke = await fetch(url);
//     let parsedJoke= await joke.json()
//     console.log(this.state)
//     console.log(parsedJoke);
//     this.setState([{ 
//       type: parsedJoke.type,
//       punchline: parsedJoke.punchline,
//       id: parsedJoke.id,
//       setup: parsedJoke.setup,
//     }])
//     console.log("after: ",typeof this.state)
//   }


//   render() {   

//     return (      

//       <div>

//           {this.state.map((element)=>{  
           
//            return <div className="container" key={element.id}>
//            <JokeItem setup= {element.setup} punchline= {element.punchline} type={element.type} id={element.id}  />     
//            </div>           

//           })}        
          
         
//       </div>
      
//     );
//   }
// }

// export default Joke;

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


