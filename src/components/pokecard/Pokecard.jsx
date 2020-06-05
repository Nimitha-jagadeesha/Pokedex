import React from 'react';

import './pokecard.css';

export const Pokecard= ({id,name,sprite,handlePick}) =>{
    return (
        <div className="pokecard" onClick={()=>handlePick(name)}>
           {
            id<=20 
            ?<img className="pokemon-sprite" alt = "pokemon" src={sprite}/>
            : null
           }
                <p>{name}</p>
           
        </div>
    )
}