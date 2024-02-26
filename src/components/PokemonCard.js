import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className='flex flex-col items-center text-center text-white lg:py-2.5 md:mt-4'>
      <h2 className='text-center font-bold text-2xl mb-4 uppercase'>{pokemon.name}</h2>
      <div className='bg-lime-400/50 rounded-full aspect-square my-4'>
        <img className='w-40' src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className='bg-orange-900 py-6 px-20 mt-4 rounded-3xl sm:px-10'>
        <p className='text-lg text-slate-200'>Weight: <strong className='text-white'>{pokemon.weight}</strong></p>
        <p className='text-lg text-slate-300'>Height: <strong className='text-white'>{pokemon.height}</strong></p>
        <span className='text-lg text-slate-300'>Type: </span>
        {pokemon.types.map((form, index) => (
          <span key={index} className='text-lg font-bold'><strong>{form.type.name}</strong>, </span>
        ))}

        <p className='text-lg text-slate-300'>Stats: </p>
        {pokemon.stats.map((level, index) => (
          <span key={index} className='text-lg text-slate-300 capitalize'>{level.stat.name}: <strong className='text-white'>{level.base_stat}</strong> <br /> </span>
        ))}

        <span className='text-lg text-slate-300'>Abilities: </span>
        {pokemon.abilities.map((quality, index) => (
          <span key={index} className='text-lg text-slate-300 capitalize'><strong className='text-white'>{quality.ability.name}, </strong></span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
