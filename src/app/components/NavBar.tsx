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
      <div className="md:flex w-[60%]"></div>
      <div className="w-[20%] flex items-center gap-4 xl:gap-8 justify-end">
        {
          // TODO LOGOUT BUTTON
          session.isLoggedIn && (
            <p className="capitalize">Hello, {session.username}</p>
          )
        }
        <Menu session={session} />
      </div>
    </div>
  )
}

export default NavBar
