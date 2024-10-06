'use client'

import React, { useActionState } from 'react'

import Button from '../components/Button'
import { login } from '@/actions'

const Login = () => {
  const [state, formAction] = useActionState<any, FormData>(login, undefined)

  return (
    <div className="flex items-center justify-center h-[calc(100vh-96px)]">
      <div className="p-4 bg-white rounded-md w-[90%] h-[50%] items-center justify-center">
        <div className="flex flex-col gap-8 justify-between">
          <span className="font-bold text-xl text-pink-700 text-center">
            Login
          </span>
          <p className="text-sm text-center text-red-500 h-4">
            {state?.error && state.error}
          </p>

          <form action={formAction} className="flex flex-col gap-8">
            <input
              required
              type="text"
              name="username"
              placeholder="Username"
              className="flex-1 bg-slate-100 rounded-lg p-2"
            />
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              className="flex-1 bg-slate-100 rounded-lg p-2"
            />
            <Button label="Login" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
