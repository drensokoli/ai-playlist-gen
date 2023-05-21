// index.tsx
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { ChangeEvent, useState } from 'react';
import { getAnswer } from '../utils/getAnswer';

const Home: NextPage = () => {

  return (
    <>
      <div className="pt-24 flex flex-col">
        <SearchBar />
      </div>
    </>
  );
};

export default Home;