import React from 'react'
import {Pokelist} from '../pokelist/Pokelist'
import'./pokedex.css'
import {Searchbox } from '../searchbox/Searchbox'
import{PokeSearchResult} from '../pokeSearchResult/PokeSearchResult'
export const Pokedex=({handlePokeSearch,pokemons,handlePick,selectPokemon})=>{
    return(
            <div className="pokedex-container">
                    <div className="pokelist-container">
                    <Searchbox handlePokeSearch={handlePokeSearch}/>
                    
                             <Pokelist 
                             handlePick={handlePick}
                             handlePokeSearch={handlePokeSearch}
                             pokemons={pokemons}/>
                    </div>
                    <div className="pokesearchresult-container">
                        {
                        selectPokemon
                        ?<PokeSearchResult
                        name={selectPokemon}
                         showResult={true}/>
                        :
                        <PokeSearchResult
                        name={selectPokemon}
                         showResult={false}/>
                    }
                    </div>
            </div>

    );
}