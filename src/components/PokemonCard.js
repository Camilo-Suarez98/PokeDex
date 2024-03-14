import React from 'react';
import Paragraph from './Paragraph';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className='flex flex-col items-center text-center text-white lg:py-2.5 md:mt-4'>
      <h2 className='text-center font-bold text-2xl mb-4 uppercase'>{pokemon.name}</h2>
      <div className='bg-lime-400/50 rounded-full aspect-square my-4'>
        <img className='w-40' src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className='bg-orange-900 py-6 px-20 mt-4 rounded-3xl sm:px-10'>
        <Paragraph info="Weight" value={pokemon.weight} />
        <Paragraph info="Height" value={pokemon.height} />
        <p className='text-lg text-slate-300'>Type: {" "}
          {pokemon.types.map((form, index) => (
            <span key={index} className='text-lg font-bold'><strong className='text-white'>{form.type.name}</strong>, </span>
          ))}
        </p>

        <p className='text-lg text-slate-300'>Stats: {" "} <br />
          {pokemon.stats.map((level, index) => (
            <span key={index} className='text-lg text-slate-300 capitalize'>{level.stat.name}: <strong className='text-white'>{level.base_stat}</strong> <br /> </span>
          ))}
        </p>

        <p className='text-lg text-slate-300'>Abilities: {" "}
          {pokemon.abilities.map((quality, index) => (
            <span key={index} className='text-lg text-slate-300 capitalize'><strong className='text-white'>{quality.ability.name}, </strong></span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
