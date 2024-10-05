import NoData from './NoData'
import React from 'react'
import UserCard from './UserCard'

const UserList = ({ users }: any) => {
  return (
    <div className="flex gap-x-4 gap-y-8 justify-between flex-wrap">
      {users.length > 0 ? (
        users.map((user: any, i: number) => <UserCard key={i} user={user} />)
      ) : (
        <NoData />
      )}
    </div>
  )
}

export default UserList
