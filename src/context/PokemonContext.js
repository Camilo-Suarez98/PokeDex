import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [status, setStatus] = useState('default');

  const fetchPokemon = async (pokemon) => {
    setStatus('loading');
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      const data = await res.json();
      setSelectedPokemon(data);
      setStatus('done');
    } catch (error) {
      setStatus('error');
      setSelectedPokemon(null);
      return `Error ${error.message}`;
    }
  }

  return (
    <>
      <PokemonContext.Provider value={{ status, selectedPokemon, fetchPokemon }}>
        {children}
      </PokemonContext.Provider>
    </>
  )
};

