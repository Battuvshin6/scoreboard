import React from 'react'
import Counter from './Counter'

const Player = (props)=> {
    return(
        <div className="player">
            
            <div className="player-name">
                <button onClick={() => props.removePlayer(props.id)} className="remove-player">✖</button>
                {props.name}
            </div>
            <Counter index={props.index} score= {props.score} changeScore = {props.changeScore}/>
        </div>
    )
  }

export default Player