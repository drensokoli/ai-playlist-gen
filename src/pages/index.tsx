// index.tsx
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { ChangeEvent, useState } from 'react';
import { getAnswer } from '../utils/getAnswer';

const Home: NextPage = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async (question: string) => {
    try {
      const response = await getAnswer(question);
      setAnswer(response);
      setError('');
    } catch (err) {
      setError('There was an error fetching the answer. Please try again.');
    }
  };

  return (
    <>
      <div className="pt-24 flex flex-col">
        <SearchBar onSearch={handleSearch} />
        <div className='w-5/6 lg:w-2/3  mx-auto'>

          {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>
        <div className="mt-4">{answer}</div>
      </div>
    </>
  );
};

export default Home;