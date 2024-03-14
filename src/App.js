import { useState, useContext } from 'react';
import Layout from './components/Layout';
import Input from './components/Input';
import Button from './components/Button';
import PokemonCard from './components/PokemonCard';
import Loader from './components/Loader';
import { PokemonContext } from './context/PokemonContext';

function App() {
  const { status, selectedPokemon, fetchPokemon } = useContext(PokemonContext);
  const [searchParams, setSearchParams] = useState('');

  const isDefault = status === 'default';
  const isLoading = status === 'loading';
  const isDone = status === 'done';
  const isError = status === 'error';

  const handleSearchParams = (e) => {
    setSearchParams(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchParams) return;
    fetchPokemon(searchParams);
  };

  return (
    <Layout>
      <div className='flex flex-col w-2/5 justify-evenly relative mb-20 mg:w-2/3 md:w-9/12 sm:w-11/12'>
        <h1 className='text-center text-white font-bold text-3xl mb-10 mg:my-6 md:my-4'>PokeDex</h1>
        <form onSubmit={e => handleSubmit(e)} className="flex flex-col">
          <Input type='number' placeholder="ID" onChange={handleSearchParams} />
          <Input type='text' placeholder="Name" onChange={handleSearchParams} />
          <Button onClick={(e) => handleSubmit(e)} text="Search" />
        </form>
      </div>

      {isDefault && <h1 className='text-white w-2/5 text-2xl font-bold mg:py-4 md:w-11/12'>Enter your search by name or ID (between 1 and 1025)</h1>}
      {isDone && <PokemonCard pokemon={selectedPokemon} />}
      {isLoading && <Loader />}
      {isError && <h1 className='text-white text-xl font-bold'>No Pokemon match your search.</h1>}
    </Layout>
  );
};

export default App;
