import { getSession, logout } from '@/actions'

import Link from 'next/link'
import Menu from './Menu'
import React from 'react'

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
        {session.isLoggedIn && <Link href="/profiles">Profiles</Link>}
      </div>
      <div className="w-[20%] flex items-center gap-4 xl:gap-8 justify-end">
        {session.isLoggedIn && (
          <div className="flex w-full justify-between">
            <p className="capitalize">Hello, {session.username}</p>
            <form className="" action={logout}>
              <button>Logout</button>
            </form>
          </div>
        )}
        <Menu session={session} />
      </div>
    </div>
  )
}

export default NavBar
