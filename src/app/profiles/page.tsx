import { getSession, getUsers } from '@/actions'

import React from 'react'
import UserList from '../components/UserList'
import { redirect } from 'next/navigation'

const ProfilePage = async () => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect('/login')
  }
  const users = await getUsers()
  return (
    <div className="flex gap-6 py-6">
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <UserList users={users} />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
