'use server'

import {
  SessionData,
  defaultSession,
  sessionOptions
} from '@/types/sessionData'
import { callApi, fetchData } from '@/app/services/api'

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

export const getPosts = async (keyword: string): Promise<any> => {
  const command = `posts${
    keyword.length > 0 ? '?title=' + keyword.toLowerCase() : ''
  }`
  const data = await fetchData(command)
  return data
}

export const addPost = async (formData: FormData) => {
  const session = await getSession()

  const title = formData.get('postTitle') as string
  const body = formData.get('postContent') as string
  const userId = session.userId

  const payload = {
    title,
    body,
    userId
  }

  return await callApi('posts', 'POST', payload)
}

export const editPost = async (formData: FormData) => {
  const session = await getSession()

  const id = formData.get('id') as string
  const title = formData.get('postTitle') as string
  const body = formData.get('postContent') as string
  const userId = session.userId

  const payload = {
    id,
    title,
    body,
    userId
  }

  return await callApi('posts', 'PUT', payload)
}

export const deletePost = async (formData: FormData) => {}

export const getUsers = async (id?: number): Promise<any> => {
  const command = `users${id ? '?id =' : ''}`
  console.log('command', command)
  let data
  try {
    data = await fetchData(command)
  } catch (err) {
    console.log('getUsers', err)
  }
  return data
}
