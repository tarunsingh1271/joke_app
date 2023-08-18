import React, { Component } from "react";
import JokeItem from "./JokeItem";

export class Joke extends Component { 
  data= [
    {
      "type":"general","setup":"What did celery say when he broke up with his girlfriend?","punchline":"She wasn't right for me, so I really don't carrot all.","id":160
    }
  ]
   
  constructor()
  {
      super();
      console.log("Hello i am constructor")
      this.state= {
          data: this.data,
      }
  }
  // async componentDidMount(){
  //   let url= "https://official-joke-api.appspot.com/random_joke";
  //   let joke = await fetch(url);
  //   let parsedJoke= await joke.json()
  //   console.log(parsedJoke);
  //   this.setState({data: parsedJoke.data})
  // }


  render() {   

    return (      

      <div>

          {this.state.data.map((element)=>{  
           
           return <div className="container" key={element.id}>
           <JokeItem setup= {element.setup} punchline= {element.punchline} type={element.type} id={element.id}  />     
           </div>           

          })}        
          
         
      </div>
      
    );
  }
}

export default Joke;

