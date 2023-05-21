  import { useEffect } from 'react'
  import Navbar from '../components/Navbar'
  import '../styles/globals.css'
  import type { AppProps } from 'next/app'

  declare module 'preline';


  function MyApp({ Component, pageProps }: AppProps) {
  
    useEffect(() => {
      import('preline')
    }, [])

    return (
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    )
  }

  export default MyApp
