import { getSession, logout } from '@/actions'

import Link from 'next/link'
import Menu from './Menu'
import React from 'react'

const NavBar = async () => {
  const session = await getSession()

  return (
    <div className="h-24 flex items-center justify-between">
      <div className="block w-[20%]">
        <Link href="/" className="font-bold text-xl text-pink-700">
          Home
        </Link>
      </div>
      <div className="hidden md:flex w-[60%] gap-4">
        {session.isLoggedIn && (
          <Link className="text-pink-700 hover:text-pink-900" href="/profiles">
            | Profiles |
          </Link>
        )}
        {session.isLoggedIn && (
          <Link className="text-pink-700 hover:text-pink-900" href="/">
            | Posts |
          </Link>
        )}
      </div>
      <div className="w-[20%] flex items-center gap-4 xl:gap-8 justify-end">
        {session.isLoggedIn && (
          <div className="hidden md:flex lg:flex w-full justify-between">
            <p className="capitalize">Hello, {session.username}</p>
            <form className="" action={logout}>
              <button className="text-pink-700 hover:text-pink-900">
                Logout
              </button>
            </form>
          </div>
        )}
        <Menu session={session} />
      </div>
    </div>
  )
}

export default NavBar
