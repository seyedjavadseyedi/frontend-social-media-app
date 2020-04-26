import React from 'react'

const PostItem = ({ id, image, title, description, creatorId }) => {
  return (
    <li>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
          <button>حذف پست</button>
      </div>
    </li>
  )
}

export default PostItem
