'use server'

import {
  SessionData,
  defaultSession,
  sessionOptions
} from '@/types/sessionData'

import { cookies } from 'next/headers'
import { getIronSession } from 'iron-session'
import { redirect } from 'next/navigation'
import { users } from '@/constants/users'

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn
  }
  return session
}
export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession()
  const usernameInput = formData.get('username') as string
  const passwordInput = formData.get('password') as string

  const user = users.find((userObj) => userObj.username === usernameInput)

  if (!user) {
    return {
      error: 'User not found'
    }
  }

  if (user.password !== passwordInput) {
    return {
      error: 'Invalid credentials'
    }
  }

  session.userId = user.userId
  session.username = user.username
  session.isLoggedIn = true
  await session.save()

  redirect('/')
}

export const logout = async () => {
  const session = await getSession()
  session.destroy()
  redirect('/login')
}

export const addPost = async (formData: FormData) => {}
export const editPost = async (formData: FormData) => {}

export const deletePost = async (formData: FormData) => {}
