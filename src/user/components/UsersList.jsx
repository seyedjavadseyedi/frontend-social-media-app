import React from 'react'
import UserItem from './UserItem'

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div>
        <p>کاربری پیدا نشد!</p>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {items.map(({ id, image, name, posts }) => (
          <UserItem key={id} id={id} image={image} name={name} postCount={posts} />
        ))}
      </ul>
    </div>
  )
}

export default UsersList
