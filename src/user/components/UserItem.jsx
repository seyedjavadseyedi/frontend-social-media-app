import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ id, image, name, postCount }) => {
  return (
    <li>
      <Link to={`/${id}/posts`}>
        <div>
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
        <p>{postCount}</p>
      </Link>
    </li>
  )
}

export default UserItem
