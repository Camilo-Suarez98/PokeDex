import { useState } from 'react';
import Layout from './components/Layout';
import Input from './components/Input';
import Button from './components/Button';
import PokemonCard from './components/PokemonCard';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchParams, setSearchParams] = useState('');
  const [status, setStatus] = useState('default')

  const isDefault = status === 'default';
  const isLoading = status === 'loading';
  const isDone = status === 'done';
  const isError = status === 'error';

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchParams) {
      return;
    }
    setStatus('loading');
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchParams}`)
      .then(response => response.json())
      .then(data => {
        setSelectedPokemon(data);
        setStatus('done');
      })
      .catch(error => {
        console.error(error);
        setStatus('error');
        setSelectedPokemon(null);
      })
  }

  return (
    <Layout>
      <div className='flex flex-col w-2/5 justify-evenly relative mb-20 mg:w-2/3 md:w-9/12 sm:w-11/12'>
        <h1 className='text-center text-white font-bold text-3xl mb-10 mg:my-6 md:my-4'>PokeDex</h1>
        <form onSubmit={e => handleSubmit(e)} className="flex flex-col">
          <Input type='number' placeholder="ID" onChange={e => handleSearchParams(e)} />
          <Input type='text' placeholder="Nombre" onChange={e => handleSearchParams(e)} />
          <Button onClick={(e) => handleSubmit(e)} text="Consultar" />
        </form>
      </div>

      {isDefault && <h1 className='text-white w-2/5 text-2xl font-bold mg:py-4 md:w-11/12'>Ingresa tu búsqueda por nombre o ID</h1>}
      {isDone && <PokemonCard pokemon={selectedPokemon} />}
      {isLoading && <h1 className='text-white text-3xl font-bold'>Cargando los datos del Pokemon</h1>}
      {isError && <h1 className='text-white text-xl font-bold'>Ningún Pokemon coincide con tu búsqueda.</h1>}
    </Layout>
  );
}

export default App;
