import React from 'react'
import './Pokelist.css'
import { Pokecard } from '../pokecard/Pokecard'

export const Pokelist =({pokemons,handlePick}) =>
{
        return(
                <div className="pokelist">
                   {
                           pokemons.map(pokemons =>{

                                let sprite = null;
                                try{
                                   sprite=JSON.parse(pokemons.sprites)
                                   sprite =sprite.normal;
                                }
                                catch(error){}
                                return pokemons.name
                                ?<Pokecard 
                                        handlePick={handlePick}
                                        key={pokemons.id}
                                        id={pokemons.id}
                                        name={pokemons.name}
                                        sprite ={sprite}/>: null;
                           })
                           
                   }
                </div>

        )
}