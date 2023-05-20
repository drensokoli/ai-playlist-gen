import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import { ChangeEvent } from 'react'

const Home: NextPage = () => {
  return (
    <>
      <div className='pt-24'>
        <SearchBar />
      </div>
    </>
  )
}

export default Home
