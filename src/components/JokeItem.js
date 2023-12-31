import React, { Component } from 'react'

export class JokeItem extends Component {
  render() {
      
    const {setup, punchline, type, id} = this.props;
    return (
      <div>

        <div className="card text-center">
          <div className="card-header">Your Laughter Dose of The Day!!</div>
          <div className="card-body">
            <h5 className="card-title">{setup}</h5>
            <p className="card-text">{punchline}</p>
            <button className="btn btn-primary me-md-4">Like </button>
            <button className="btn btn-primary">Dislike </button>
              
          </div>
          <div className="card-footer text-body-secondary">Type: {type},  ID: {id} </div>
        </div>

      </div>
    )
  }
}

export default JokeItem