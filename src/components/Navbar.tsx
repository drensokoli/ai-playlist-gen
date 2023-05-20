import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react';
// import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import Logo from '../../public/logo.png';

export default function Navbar() {
  return (
    <>
      <div className="backdrop-blur-md bg-white bg-opacity-75 fixed w-full top-0 z-10 shadow-lg py-3 px-8 flex flex-row justify-between">
        <Image src={Logo} width={110} height={30} alt={''}></Image>
        <button type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >Sign in</button>

      </div>

    </>
  )
}
