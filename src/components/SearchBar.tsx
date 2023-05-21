import React, { FormEvent, useState } from 'react';
import { getNames, getSongs } from '../utils/getAnswer';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [active, setActive] = useState(false); // Added state for accordion active status

  const [names, setNames] = useState('');
  const [songs, setSongs] = useState('');

  const [namesError, setNamesError] = useState('');
  const [songsError, setSongsError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query === '') {
      setError(true);
    } else {

      try {

        setError(false);
        // onSearch(query);
        const namesResponse = getNames(query);
        setNames(await namesResponse);

        const songsResponse = getSongs(query);
        setSongs(await songsResponse);

        setActive(true);
      } catch (error) {
        setActive(true);

        setNamesError('Names Error');
        setSongsError('Songs Error');

      }
    }
  };

  return (
    <>
      <form
        className={`mb-8 px-6 w-5/6 lg:w-2/3 mx-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] ${error ? 'border-red-500' : 'border-gray-300'
          }`}
        onSubmit={handleSubmit}
      >
        <div className='flex flex-row bg-gray-50 border text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full '>
          <div className='relative w-full '>
            <svg
              className='w-5 h-5 text-gray-400 absolute top-3.5 left-4'
              fill='currentColor'
              viewBox='0 0 18 18'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              ></path>
            </svg>
            <input
              type='text'
              placeholder='Write your playlist description here...'
              className={`bg-white h-12 w-full px-12 focus:outline-none hover:cursor-pointer rounded-none rounded-l-lg ${error ? 'border-red-500' : ''
                }`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className={`py-2 px-2 rounded-none rounded-r-sm bg-gray-200 ${query === '' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={query === ''}
          >
            Submit
          </button>
        </div>
      </form>
      {active && (
        <div className='w-5/6 lg:w-2/3 mx-auto px-8 py-4'>
          <div className='flex flex-col w-full'>

            <h1>Give your playlist a name:</h1>
            <input type="text" placeholder="Playlist name" className="border-2 border-gray-300 rounded-md p-2" />
            <div className='flex gap-4 w-24'>
              {namesError && <div className='bg-gray-200 h-12 mt-2 rounded-md w-14 text-center p-3'>{namesError}</div>}
            </div>

          </div>
          <div className='flex flex-col w-full mt-4'>

            <h1>Song list:</h1>
            {songsError && <div className='bg-gray-200 h-12 w-full mt-2 rounded-md p-3'>{songsError}</div>}

            <div className='bg-gray-400 h-12 w-full mt-2 rounded-md text-center p-3'>Show more songs</div>

          </div>
          <button className='bg-blue-400 h-12 w-full mt-6 rounded-md text-center p-3 '>Create playlist</button>
        </div>)}
    </>
  );
};

export default SearchBar;