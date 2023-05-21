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
      <div className="backdrop-blur-md bg-white bg-opacity-75 fixed w-full top-0 z-10 shadow-lg py-3 px-8 flex flex-row justify-center">
        <Image src={Logo} width={110} height={30} alt={''}></Image>
      </div>
    </>
  )
}
