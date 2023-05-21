import React, { FormEvent, useState } from 'react';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-5/6 lg:w-2/3 mx-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-md flex flex-col gap-2">
      <div className="relative">
        <svg className="w-5 h-5 text-gray-400 absolute top-3.5 left-4" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
        </svg>
        <input
          type="text"
          placeholder="Write your playlist description here..."
          className="bg-white h-12 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Search</button>
    </form>
  );
};

export default SearchBar;
