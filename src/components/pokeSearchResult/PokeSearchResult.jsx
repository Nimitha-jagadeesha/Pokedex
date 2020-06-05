import React from 'react'
import './poke-search-result.css'
export const PokeSearchResult =({showResult,name}) => {
    return (
   
      <div className="poke-result-card">
     {
       showResult
      ?<p>{name}</p>
      : <div>Welcome To the pokedex</div> 
    }
      </div>
    )
}