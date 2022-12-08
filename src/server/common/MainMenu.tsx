import React, { type FC } from 'react';
import Image from 'next/image';
import Link from "next/link";

const MainMenu: FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <Link href="/">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image src="/Arkea-logo.svg" height={84} width={84} className="h-6 mr-3 sm:h-9" alt="App logo" />
          <span className="font-semibold text-xl tracking-tight">Arkea by Nicolas</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
      </Link>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/client/create" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
            Créer client
          </Link>
          <Link href="/account/open" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
            Ouvrir un compte
          </Link>
          <Link href="/account/consult" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
            Consulter les opérations
          </Link>
          <Link href="/account/overview" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default MainMenu;
