import React from 'react'

const UserItem = ({ image, name, postCount }) => {
  return (
    <li>
      <div>
        <img src={image} alt={name} />
      </div>
      <span>{name}</span>
      <span>{postCount}</span>
    </li>
  )
}

export default UserItem
