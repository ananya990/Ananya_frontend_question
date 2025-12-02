import React from 'react'

function UserList({users, onDelete}) {
  return (
    <div className="flex flex-col gap-4">{users.map((user)=>(<UserCard key={user.id} user={user} onDelete={onDelete}/>
    ))} 
    </div>
  )
}

export default UserList
