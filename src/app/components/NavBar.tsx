import Link from 'next/link'
import Menu from './Menu'
import React from 'react'
import { getSession } from '@/actions'

const NavBar = async () => {
  const session = await getSession()

  return (
    <div className="h-24 flex items-center justify-between">
      <div className="hidden md:block lg-block w-[20%]">
        <Link href="/" className="font-bold text-xl text-pink-700">
          Home
        </Link>
      </div>
      <div className="md:flex w-[60%]">
        <div className="flex gap-6 text-gray-600 items-center w-full">
          Search
          <input
            placeholder="Type your search here"
            className="bg-slate-100 rounded-lg p-2 w-full"
          />
        </div>
      </div>
      <div className="w-[20%] flex items-center gap-4 xl:gap-8 justify-end">
        {session.isLoggedIn && (
          <p className="capitalize">Hello, {session.username}</p>
        )}
        <Menu session={session} />
      </div>
    </div>
  )
}

export default NavBar
