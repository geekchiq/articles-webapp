'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import { SessionData } from '@/types/sessionData'

interface SessionProp {
  session: SessionData
}

const Menu = ({ session }: SessionProp) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-pink-700 rounded-sm ${
            isOpen ? 'rotate-45' : ''
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-pink-700 rounded-sm ${
            isOpen ? 'opacity-0' : ''
          } ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-pink-700 rounded-sm ${
            isOpen ? '-rotate-45' : ''
          } origin-left ease-in-out duration-500`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href="/" className="font-bold text-xl text-pink-700">
            Home
          </Link>
          <Link href="/" className="font-bold text-xl text-pink-700">
            Settings
          </Link>
          <Link href="/" className="font-bold text-xl text-pink-700">
            {session.isLoggedIn ? 'Logout' : 'Login'}
          </Link>
        </div>
      )}
    </div>
  )
}

export default Menu
