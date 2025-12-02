import React from 'react'

function UserCard({user, onDelete}) {

  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
        <div className="flex item-center gap-4">
            <img src={user.image} className='w-14 h-14 rounded-full object-cover'/>
            <div>
                <h3 className="text-lg font-semibold">{user.firstName}</h3>
                <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
        </div>

      <button onClick={() => onDelete(user.id)} className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md"> Delete </button>
    </div>
  );
}

export default UserCard;
