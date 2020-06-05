import React, {Component} from 'react';
import './App.css';
import {pokemonData} from './../data/pokemonData'
import {Pokedex} from './pokedex/Pokedex'
class App extends Component
{
  constructor(){
    super();
    this.state={
      searchField:'',
      pokemons:[],
      selectedPokemon:null,
    }
  }

  componentDidMount(){
   this.setState(
     {pokemons: pokemonData}
   )
  }

  handlePokeSearch=(searchValue)=>{
  this.setState({ searchField: searchValue});
  }
  handlePick=(name)=>
  {
    const { pokemons } = this.state;
		let selectedPokemon = pokemons.find(pokemon => pokemon.name === name);
		this.setState({ selectedPokemon });
  }
  render(){
    const {pokemons,searchField}=this.state;
    let searchedPokemons=pokemons.filter(pokemon=>{
      return pokemon.name
      ?pokemon.name.toLowerCase().includes(searchField.toLowerCase())
      :false;
    })
    return(
      <div className="App">
            <h1>Pokedex</h1>
            <Pokedex
            selectedPokemon={this.selectPokemon}
              handlePick ={this.handlePick}
              handlePokeSearch={this.handlePokeSearch}
              pokemons={searchedPokemons}/>
      </div>
    );
  }
}

export default App;
